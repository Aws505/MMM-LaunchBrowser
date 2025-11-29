# MMM-LaunchBrowser

A MagicMirror² module that creates clickable launcher icons to open websites in your default browser or in kiosk mode.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-MagicMirror²-informational)

## Features

- **Customizable icons** - Use emoji, Unicode symbols, or HTML icons
- **Flexible browser control** - Launch browsers with custom commands and flags
- **Kiosk mode support** - Perfect for full-screen displays
- **Configurable zoom** - Set browser zoom level from 30% to 300% on launch
- **Built-in home button** - Floating overlay button to close browser and return to MagicMirror
- **Easy styling** - Built-in CSS classes for customization
- **Multiple launchers** - Add as many launcher instances as you need
- **Fully configurable** - Control button position, size, colors, and behavior

## Screenshots

```
┌─────────────┐
│     🌐      │  ← Icon (emoji/Unicode)
│   YouTube   │  ← Optional label
└─────────────┘
```

## Installation

### Step 1: Clone the Repository

Navigate to your MagicMirror modules directory and clone this repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/Aws505/MMM-LaunchBrowser.git
```

### Step 2: Install Python Dependencies

The home button overlay requires Python 3 and a few packages:

```bash
# Install Python dependencies
pip3 install psutil

# Make the home button executable
chmod +x ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
```

**Note:** Node.js dependencies are built-in - no npm install needed!

## Configuration

Add the module to your `config/config.js` file:

### Basic Example

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    browserCommand: "firefox --kiosk"
  }
}
```

### Multiple Launchers

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://gmail.com",
    label: "Gmail",
    icon: "📧"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://netflix.com",
    label: "Netflix",
    icon: "🎬",
    browserCommand: "chromium-browser --kiosk"
  }
}
```

## Configuration Options

### Basic Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `url` | `string` | `"https://example.com"` | The URL to open when clicked |
| `label` | `string` | `""` | Text label displayed below the icon |
| `icon` | `string` | `"🌐"` | Icon to display (emoji, Unicode, or HTML) |
| `browserCommand` | `string` | `"firefox --kiosk"` | Browser command with flags |
| `cssClass` | `string` | `""` | Additional CSS class for custom styling |
| `fontSize` | `string` | `"40px"` | Size of the icon |
| `zoom` | `number` | `100` | Browser zoom level percentage (30, 50, 67, 80, 90, 100, 110, 120, 133, 150, 170, 200, 240, 300) |
| `enableHomeButton` | `boolean` | `true` | Enable/disable the home button overlay |

### Home Button Options

Configure the floating home button that appears when the browser is open:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `homeButton.position` | `string` | `"top-right"` | Button position: `"top-right"`, `"top-left"`, `"bottom-right"`, `"bottom-left"` |
| `homeButton.size` | `number` | `60` | Button size in pixels |
| `homeButton.margin` | `number` | `10` | Margin from screen edge in pixels |
| `homeButton.bgColor` | `string` | `"#222222"` | Background color of button container |
| `homeButton.buttonBg` | `string` | `"#444444"` | Button background color |
| `homeButton.buttonFg` | `string` | `"white"` | Button foreground/text color |
| `homeButton.buttonText` | `string` | `"🏠"` | Button text/emoji |
| `homeButton.fontSize` | `number` | `24` | Button font size |

### Browser Commands

**Firefox (Kiosk Mode):**
```javascript
browserCommand: "firefox --kiosk"
```

**Chromium (Kiosk Mode):**
```javascript
browserCommand: "chromium-browser --kiosk"
```

**Default Browser (Normal Window):**
```javascript
browserCommand: "xdg-open"
```

**Custom Browser with Multiple Flags:**
```javascript
browserCommand: "firefox --kiosk --private-window"
```

## Home Button Feature

The home button is a floating overlay that appears when the browser is running. It provides a convenient way to close the browser and return to MagicMirror.

### How It Works

1. When you click a launcher, the browser opens
2. The home button automatically appears as a floating overlay
3. Click the home button to close the browser and return to MagicMirror
4. The button monitors the browser process and hides when the browser is closed

### Basic Configuration

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    label: "YouTube",
    icon: "📺",
    browserCommand: "firefox --kiosk",
    enableHomeButton: true  // Enable home button (default)
  }
}
```

### Disable Home Button

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    icon: "📺",
    enableHomeButton: false  // Disable home button
  }
}
```

### Custom Home Button Position

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    icon: "📺",
    homeButton: {
      position: "bottom-right",  // Position in bottom-right corner
      size: 80,                  // Larger button
      margin: 20                 // More margin from edge
    }
  }
}
```

### Custom Home Button Styling

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    icon: "📺",
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
```

### Different Button Text/Emoji

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    icon: "📺",
    homeButton: {
      buttonText: "⬅"  // Left arrow
      // or: "↩", "⏎", "✕", "⨯", "←", "🔙"
    }
  }
}
```

### Position Examples

```javascript
// Top-right corner (default)
homeButton: { position: "top-right" }

// Top-left corner
homeButton: { position: "top-left" }

// Bottom-right corner
homeButton: { position: "bottom-right" }

// Bottom-left corner
homeButton: { position: "bottom-left" }
```

### Requirements

- Python 3 installed
- `psutil` Python package
- `home_button.py` must be executable

**Installation:**
```bash
pip3 install psutil
chmod +x ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
```

### Testing the Home Button

Test the home button manually:

```bash
# Start the home button
python3 ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py

# Open Firefox
firefox --kiosk https://youtube.com

# The home button should appear. Click it to close Firefox.
```

### Advanced: Command-Line Usage

You can run the home button script manually with custom options:

```bash
python3 home_button.py --browser firefox \
                       --position bottom-right \
                       --size 80 \
                       --button-bg "#ff0000" \
                       --button-text "✕"
```

**Available command-line options:**
- `--browser` - Browser process name (default: firefox)
- `--position` - Button position (default: top-right)
- `--size` - Button size in pixels (default: 60)
- `--margin` - Margin from edge in pixels (default: 10)
- `--bg-color` - Background color (default: #222222)
- `--button-bg` - Button background (default: #444444)
- `--button-fg` - Button foreground (default: white)
- `--button-text` - Button text (default: 🏠)
- `--font-size` - Font size (default: 24)

## Styling

### Using Custom CSS

Create or edit `~/MagicMirror/css/custom.css`:

```css
/* Change icon size */
.mmm-launchbrowser-icon {
  font-size: 60px;
}

/* Style the label */
.mmm-launchbrowser-label {
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
}

/* Add hover effect */
.mmm-launchbrowser:hover {
  opacity: 0.7;
  transform: scale(1.1);
  transition: all 0.2s ease;
}

/* Style specific launcher using cssClass */
.youtube-launcher {
  color: #ff0000;
}

.gmail-launcher {
  color: #ea4335;
}
```

### Apply Custom Class

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://youtube.com",
    cssClass: "youtube-launcher",
    icon: "📺",
    label: "YouTube"
  }
}
```

## Advanced Examples

### Web Apps Dashboard

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://music.youtube.com",
    icon: "🎵",
    label: "Music",
    fontSize: "50px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://calendar.google.com",
    icon: "📅",
    label: "Calendar",
    fontSize: "50px"
  }
},
{
  module: "MMM-LaunchBrowser",
  position: "middle_center",
  config: {
    url: "https://photos.google.com",
    icon: "📷",
    label: "Photos",
    fontSize: "50px"
  }
}
```

### Using Unicode Icons

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://home-assistant.io",
    icon: "⌂",  // Unicode house symbol
    label: "Home",
    fontSize: "45px"
  }
}
```

### Using HTML Icons (Font Awesome)

First, include Font Awesome in your MagicMirror (if not already included):

```javascript
{
  module: "MMM-LaunchBrowser",
  position: "top_left",
  config: {
    url: "https://github.com",
    icon: '<i class="fab fa-github"></i>',
    label: "GitHub",
    fontSize: "40px"
  }
}
```

## Troubleshooting

### Browser doesn't open

1. Check that the browser is installed:
   ```bash
   firefox --version
   # or
   chromium-browser --version
   ```

2. Check MagicMirror logs:
   ```bash
   pm2 logs MagicMirror
   ```

3. Test the command manually:
   ```bash
   firefox --kiosk https://youtube.com
   ```

### Browser opens but URL is wrong

- Verify the URL in your config includes `https://` or `http://`
- Check for typos in the URL

### Icon doesn't display

- Ensure your font supports the emoji/Unicode character
- Try a different emoji or use HTML icons instead
- Check browser console for errors (F12)

### Click doesn't respond

- Ensure you're clicking directly on the icon/label area
- Check browser console for JavaScript errors
- Verify the module is properly loaded in config.js

### Home button doesn't appear

1. **Check Python dependencies:**
   ```bash
   python3 -c "import psutil; print('psutil installed')"
   ```

2. **Check if script is executable:**
   ```bash
   ls -l ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
   # Should show: -rwxr-xr-x (executable)
   ```

3. **Check MagicMirror logs:**
   ```bash
   pm2 logs MagicMirror | grep "home button"
   ```

4. **Test manually:**
   ```bash
   python3 ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
   firefox --kiosk https://youtube.com
   # Button should appear
   ```

5. **Check if already running:**
   ```bash
   pgrep -f home_button.py
   # If running, kill it: pkill -f home_button.py
   ```

### Home button doesn't close browser

1. **Check browser process name:**
   ```bash
   ps aux | grep firefox
   # Process name should match config
   ```

2. **Verify configuration:**
   - Ensure `browserCommand` matches the actual browser
   - For Chromium: use `browserCommand: "chromium-browser --kiosk"`
   - The script extracts browser name from the command

### Home button appears in wrong position

- Check `homeButton.position` in config
- Valid values: `"top-right"`, `"top-left"`, `"bottom-right"`, `"bottom-left"`
- Restart MagicMirror after config changes

### Python import error

```bash
# Install psutil
pip3 install psutil

# Or use pip (without 3)
pip install psutil

# On some systems, use apt
sudo apt-get install python3-psutil
```

## Use Cases

- **Smart Home Control Panel** - Launch Home Assistant, Node-RED, etc.
- **Media Center** - Quick access to YouTube, Netflix, Spotify
- **Productivity Dashboard** - Gmail, Calendar, Todoist shortcuts
- **Kiosk Display** - Full-screen web apps for public displays
- **Family Hub** - Easy access to family-friendly websites

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### Version 1.0.0 (2025-11-23)
- Initial release
- Basic browser launching functionality
- Customizable icons and labels
- Kiosk mode support

## Credits

Created for the MagicMirror² platform by [MagicMirror² Community](https://magicmirror.builders/)
