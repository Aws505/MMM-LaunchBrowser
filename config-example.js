/*
 * MMM-LaunchBrowser Configuration Examples
 *
 * Copy the examples below into your config/config.js file
 * and modify them to suit your needs.
 */

// ============================================
// BASIC EXAMPLE (with default home button)
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    browserCommand: "firefox --kiosk",
    enableHomeButton: true  // Home button enabled by default
  }
}

// ============================================
// WITHOUT HOME BUTTON
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    browserCommand: "firefox --kiosk",
    enableHomeButton: false  // Disable home button
  }
}

// ============================================
// MULTIPLE LAUNCHERS (Web Apps Dashboard)
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    fontSize: "50px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://gmail.com",
    label: "Gmail",
    icon: "📧",
    fontSize: "50px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://calendar.google.com",
    label: "Calendar",
    icon: "📅",
    fontSize: "50px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://netflix.com",
    label: "Netflix",
    icon: "🎬",
    fontSize: "50px"
  }
}

// ============================================
// CUSTOM HOME BUTTON POSITION
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    browserCommand: "firefox --kiosk",
    homeButton: {
      position: "bottom-right",  // Position in bottom-right corner
      size: 80,                  // Larger button
      margin: 20                 // More margin from edge
    }
  }
}

// ============================================
// CUSTOM HOME BUTTON STYLING
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://netflix.com",
    label: "Netflix",
    icon: "🎬",
    browserCommand: "firefox --kiosk",
    homeButton: {
      position: "top-right",
      size: 70,
      bgColor: "#1a1a1a",       // Dark background
      buttonBg: "#ff4444",      // Red button
      buttonFg: "white",        // White text
      buttonText: "✕",          // X instead of home icon
      fontSize: 28              // Larger font
    }
  }
}

// ============================================
// DIFFERENT HOME BUTTON ICONS
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://gmail.com",
    label: "Gmail",
    icon: "📧",
    browserCommand: "firefox --kiosk",
    homeButton: {
      buttonText: "⬅"  // Left arrow
      // Other options: "↩", "⏎", "✕", "⨯", "←", "🔙", "⌂"
    }
  }
}

// ============================================
// HOME BUTTON - ALL POSITIONS
// ============================================

// Top-right (default)
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://example.com",
    icon: "🌐",
    homeButton: { position: "top-right" }
  }
}

// Top-left
{
  module: "MMM-LaunchBrowser",
  position: "top_right",
  config: {
    url: "https://example.com",
    icon: "🌐",
    homeButton: { position: "top-left" }
  }
}

// Bottom-right
{
  module: "MMM-LaunchBrowser",
  position: "bottom_left",
  config: {
    url: "https://example.com",
    icon: "🌐",
    homeButton: { position: "bottom-right" }
  }
}

// Bottom-left
{
  module: "MMM-LaunchBrowser",
  position: "bottom_right",
  config: {
    url: "https://example.com",
    icon: "🌐",
    homeButton: { position: "bottom-left" }
  }
}

// ============================================
// CUSTOM STYLING WITH CSS CLASSES
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://home-assistant.io",
    label: "Home",
    icon: "🏠",
    cssClass: "home-launcher",  // Apply custom CSS class
    fontSize: "60px",
    homeButton: {
      position: "bottom-right",
      buttonText: "⌂"  // Unicode house
    }
  }
}

// Add to custom.css:
/*
.home-launcher {
  background-color: rgba(0, 123, 255, 0.2);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid rgba(0, 123, 255, 0.5);
}

.home-launcher:hover {
  background-color: rgba(0, 123, 255, 0.4);
}
*/

// ============================================
// DIFFERENT BROWSERS AND FLAGS
// ============================================

// Firefox kiosk mode
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://news.ycombinator.com",
    label: "Hacker News",
    icon: "📰",
    browserCommand: "firefox --kiosk"
  }
}

// Chromium kiosk mode
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://reddit.com",
    label: "Reddit",
    icon: "🤖",
    browserCommand: "chromium-browser --kiosk"
  }
}

// Default browser (normal window)
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://github.com",
    label: "GitHub",
    icon: "💻",
    browserCommand: "xdg-open"
  }
}

// Firefox with private window
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://duckduckgo.com",
    label: "Search",
    icon: "🔍",
    browserCommand: "firefox --private-window"
  }
}

// ============================================
// UNICODE ICONS
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_right",
  config: {
    url: "https://weather.com",
    label: "Weather",
    icon: "☀",  // Unicode sun symbol
    fontSize: "45px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_right",
  config: {
    url: "https://music.apple.com",
    label: "Music",
    icon: "♫",  // Unicode music note
    fontSize: "45px"
  }
}

// ============================================
// SMART HOME DASHBOARD
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "bottom_left",
  config: {
    url: "http://homeassistant.local:8123",
    label: "Home Assistant",
    icon: "🏡",
    browserCommand: "firefox --kiosk",
    fontSize: "55px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "bottom_left",
  config: {
    url: "http://nodered.local:1880",
    label: "Node-RED",
    icon: "🔴",
    browserCommand: "firefox --kiosk",
    fontSize: "55px"
  }
}

// ============================================
// ICON-ONLY LAUNCHERS (No Labels)
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "top_center",
  config: {
    url: "https://twitter.com",
    label: "",  // Empty label
    icon: "🐦",
    fontSize: "40px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_center",
  config: {
    url: "https://instagram.com",
    label: "",
    icon: "📸",
    fontSize: "40px"
  }
}

// ============================================
// MEDIA CENTER LAYOUT
// ============================================

{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://music.youtube.com",
    label: "YouTube Music",
    icon: "🎵",
    browserCommand: "firefox --kiosk",
    fontSize: "70px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://spotify.com",
    label: "Spotify",
    icon: "🎧",
    browserCommand: "firefox --kiosk",
    fontSize: "70px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://netflix.com",
    label: "Netflix",
    icon: "📺",
    browserCommand: "firefox --kiosk",
    fontSize: "70px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "▶",
    browserCommand: "firefox --kiosk",
    fontSize: "70px"
  }
}
