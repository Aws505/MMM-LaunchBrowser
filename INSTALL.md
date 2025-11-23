# Installation Guide for MMM-LaunchBrowser

## Quick Install

```bash
# 1. Clone the module
cd ~/MagicMirror/modules
git clone https://github.com/YOUR-USERNAME/MMM-LaunchBrowser.git

# 2. Install Python dependencies
pip3 install -r MMM-LaunchBrowser/requirements.txt

# 3. Make home button executable
chmod +x MMM-LaunchBrowser/home_button.py

# 4. Add to config (see config-example.js)
nano ~/MagicMirror/config/config.js
```

## Detailed Installation

### Step 1: Prerequisites

Ensure you have the following installed:

- **MagicMirror²** (v2.12.0 or later)
- **Node.js** (v14.0.0 or later)
- **Python 3** (v3.7 or later)
- **pip3** (Python package manager)

Check versions:

```bash
node --version   # Should be >= v14.0.0
python3 --version  # Should be >= 3.7
pip3 --version   # Should be installed
```

### Step 2: Clone the Repository

```bash
cd ~/MagicMirror/modules
git clone https://github.com/YOUR-USERNAME/MMM-LaunchBrowser.git
```

### Step 3: Install Python Dependencies

```bash
cd MMM-LaunchBrowser
pip3 install -r requirements.txt
```

**Alternative installation methods:**

```bash
# Method 1: Direct install
pip3 install psutil

# Method 2: Using apt (Debian/Ubuntu/Raspberry Pi OS)
sudo apt-get install python3-psutil

# Method 3: User install (no sudo required)
pip3 install --user psutil
```

**Verify installation:**

```bash
python3 -c "import psutil; print('✓ psutil installed successfully')"
```

### Step 4: Make Home Button Executable

```bash
chmod +x ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
```

**Verify:**

```bash
ls -l ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
# Should show: -rwxr-xr-x
```

### Step 5: Configure MagicMirror

Edit your MagicMirror config:

```bash
nano ~/MagicMirror/config/config.js
```

Add the module (see `config-example.js` for more examples):

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

### Step 6: Restart MagicMirror

```bash
# If using PM2
pm2 restart MagicMirror

# If running manually
# Press Ctrl+C to stop, then restart
npm start
```

## Testing

### Test the Launcher

1. Click the launcher icon on your MagicMirror
2. Browser should open in kiosk mode
3. Home button should appear in the corner

### Test the Home Button

1. Open a browser via the launcher
2. Look for the home button (🏠) in the corner
3. Click the home button
4. Browser should close and return to MagicMirror

### Manual Testing

Test the home button script manually:

```bash
# Start the home button
python3 ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py &

# Open Firefox in kiosk mode
firefox --kiosk https://youtube.com

# The home button should appear. Click it to close Firefox.
```

## Troubleshooting

### Python not found

```bash
# Install Python 3
sudo apt-get update
sudo apt-get install python3 python3-pip
```

### pip3 not found

```bash
# Install pip3
sudo apt-get install python3-pip
```

### psutil installation fails

```bash
# Try system package
sudo apt-get install python3-psutil

# Or install build dependencies
sudo apt-get install python3-dev build-essential
pip3 install psutil
```

### Home button doesn't appear

1. **Check logs:**
   ```bash
   pm2 logs MagicMirror | grep "home button"
   ```

2. **Verify Python path:**
   ```bash
   which python3
   # Should return: /usr/bin/python3 or similar
   ```

3. **Test script directly:**
   ```bash
   python3 ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
   # Should run without errors
   ```

4. **Check permissions:**
   ```bash
   ls -l ~/MagicMirror/modules/MMM-LaunchBrowser/home_button.py
   # Should be executable (-rwxr-xr-x)
   ```

### Module doesn't load

1. **Check config syntax:**
   ```bash
   # Test config for syntax errors
   node ~/MagicMirror/config/check_config.js
   ```

2. **Check MagicMirror logs:**
   ```bash
   pm2 logs MagicMirror
   ```

3. **Verify module path:**
   ```bash
   ls ~/MagicMirror/modules/MMM-LaunchBrowser/
   # Should show: MMM-LaunchBrowser.js, node_helper.js, etc.
   ```

## Upgrading

To update to the latest version:

```bash
cd ~/MagicMirror/modules/MMM-LaunchBrowser
git pull
pip3 install -r requirements.txt --upgrade
pm2 restart MagicMirror
```

## Uninstalling

```bash
# Stop MagicMirror
pm2 stop MagicMirror

# Remove module
rm -rf ~/MagicMirror/modules/MMM-LaunchBrowser

# Remove from config.js
nano ~/MagicMirror/config/config.js
# Delete the MMM-LaunchBrowser module entry

# Restart MagicMirror
pm2 restart MagicMirror
```

## System Requirements

- **Operating System:** Linux (Raspberry Pi OS, Ubuntu, Debian, etc.)
- **RAM:** 512MB minimum (1GB+ recommended)
- **Disk Space:** ~10MB for module + dependencies
- **Display:** X11 display server (for Tkinter GUI)

## Platform-Specific Notes

### Raspberry Pi

```bash
# Enable X11 (usually enabled by default)
sudo raspi-config
# Interface Options → Enable X11

# Install dependencies
sudo apt-get install python3-psutil python3-tk
```

### Ubuntu/Debian

```bash
sudo apt-get install python3-psutil python3-tk
```

### Virtual Environments (Optional)

If you prefer to use a Python virtual environment:

```bash
cd ~/MagicMirror/modules/MMM-LaunchBrowser
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Update home_button.py shebang to use venv
# Edit first line to: #!/path/to/venv/bin/python3
```

## Support

- **Issues:** Report bugs at [GitHub Issues](https://github.com/YOUR-USERNAME/MMM-LaunchBrowser/issues)
- **Documentation:** See [README.md](README.md) for full documentation
- **Examples:** See [config-example.js](config-example.js) for configuration examples
