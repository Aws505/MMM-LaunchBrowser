/* global Module */

Module.register("MMM-LaunchBrowser", {
  defaults: {
    url: "https://example.com",
    label: "",
    icon: "🌐",
    browserCommand: "firefox --kiosk",  // or your preferred flags
    cssClass: "",
    fontSize: "40px",
    zoom: 100,  // Browser zoom level (30, 50, 67, 80, 90, 100, 110, 120, 133, 150, 170, 200, 240, 300)
    // Home button configuration
    enableHomeButton: true,
    homeButton: {
      position: "top-right",  // top-right, top-left, bottom-right, bottom-left
      size: 60,
      margin: 10,
      bgColor: "#222222",
      buttonBg: "#444444",
      buttonFg: "white",
      buttonText: "🏠",
      fontSize: 24
    }
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "mmm-launchbrowser " + (this.config.cssClass || "");
    wrapper.style.cursor = "pointer";
    wrapper.style.userSelect = "none";
    wrapper.style.display = "inline-flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.fontSize = this.config.fontSize;

    if (this.config.icon) {
      const iconSpan = document.createElement("span");
      iconSpan.className = "mmm-launchbrowser-icon";
      iconSpan.innerHTML = this.config.icon;
      wrapper.appendChild(iconSpan);
    }

    if (this.config.label) {
      const labelSpan = document.createElement("span");
      labelSpan.className = "mmm-launchbrowser-label";
      labelSpan.textContent = this.config.label;
      labelSpan.style.fontSize = "0.6em";
      wrapper.appendChild(labelSpan);
    }

    wrapper.addEventListener("click", () => {
      this.sendSocketNotification("OPEN_BROWSER", {
        url: this.config.url,
        browserCommand: this.config.browserCommand,
        enableHomeButton: this.config.enableHomeButton,
        homeButton: this.config.homeButton,
        zoom: this.config.zoom
      });
    });

    return wrapper;
  }
});
