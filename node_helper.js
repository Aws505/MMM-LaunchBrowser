/* global module */

const NodeHelper = require("node_helper");
const { exec } = require("child_process");
const path = require("path");

module.exports = NodeHelper.create({
  homeButtonStarted: false,

  start() {
    console.log("MMM-LaunchBrowser helper started");
  },

  ensureHomeButtonRunning(config, browserCommand) {
    const homeButtonPath = path.join(__dirname, "home_button.py");

    // Check if home button is already running
    exec(`pgrep -f "${homeButtonPath}"`, (error, stdout) => {
      if (error || !stdout.trim()) {
        // Home button not running, start it
        const args = this.buildHomeButtonArgs(config, browserCommand);
        const cmd = `DISPLAY=:0 python3 ${homeButtonPath} ${args} >/dev/null 2>&1 &`;

        console.log("MMM-LaunchBrowser: Starting home button...");
        exec(cmd, (error) => {
          if (error) {
            console.error("MMM-LaunchBrowser: Error starting home button:", error);
          } else {
            console.log("MMM-LaunchBrowser: Home button started");
            this.homeButtonStarted = true;
          }
        });
      } else {
        console.log("MMM-LaunchBrowser: Home button already running");
        this.homeButtonStarted = true;
      }
    });
  },

  buildHomeButtonArgs(config, browserCommand) {
    if (!config) return "";

    const args = [];

    // Extract browser name from browserCommand
    const browserMatch = browserCommand?.match(/^(\w+)/);
    const browserName = browserMatch ? browserMatch[1] : "firefox";
    args.push(`--browser ${browserName}`);

    if (config.position) args.push(`--position ${config.position}`);
    if (config.size) args.push(`--size ${config.size}`);
    if (config.margin) args.push(`--margin ${config.margin}`);
    if (config.bgColor) args.push(`--bg-color "${config.bgColor}"`);
    if (config.buttonBg) args.push(`--button-bg "${config.buttonBg}"`);
    if (config.buttonFg) args.push(`--button-fg "${config.buttonFg}"`);
    if (config.buttonText) args.push(`--button-text "${config.buttonText}"`);
    if (config.fontSize) args.push(`--font-size ${config.fontSize}`);

    return args.join(" ");
  },

  socketNotificationReceived(notification, payload) {
    if (notification === "OPEN_BROWSER" && payload && payload.url) {
      const url = payload.url;
      const browserCommand = payload.browserCommand || "firefox --kiosk";
      const enableHomeButton = payload.enableHomeButton !== false; // Default true

      // Start home button if enabled
      if (enableHomeButton && payload.homeButton) {
        this.ensureHomeButtonRunning(payload.homeButton, browserCommand);
      }

      // Escape single quotes in URL for shell safety
      const safeUrl = url.replace(/'/g, "'\\''");
      const cmd = `${browserCommand} '${safeUrl}' &`;

      console.log(`MMM-LaunchBrowser: Executing: ${cmd}`);
      exec(cmd, (error) => {
        if (error) {
          console.error("MMM-LaunchBrowser error:", error);
        }
      });
    }
  }
});
