#!/usr/bin/env python3
"""
Home Button Overlay for MMM-LaunchBrowser
A simple Tkinter overlay that shows a home button when a browser is running.
Clicking the button closes the browser and returns to MagicMirror.
"""

import subprocess
import tkinter as tk
import psutil
import sys
import argparse

# Default configuration
DEFAULT_CONFIG = {
    "browser_process": "firefox",
    "position": "top-right",  # top-right, top-left, bottom-right, bottom-left
    "button_size": 60,
    "margin": 10,
    "bg_color": "#222222",
    "button_bg": "#444444",
    "button_fg": "white",
    "button_text": "🏠",
    "font_size": 24,
    "refresh_ms": 1000
}

class HomeButton:
    def __init__(self, config):
        self.config = {**DEFAULT_CONFIG, **config}
        self.root = tk.Tk()
        self.root.title("Home Button")

        # Borderless window
        self.root.overrideredirect(True)

        # Start hidden; we'll show it when browser is detected
        self.root.withdraw()

        # Setup window
        self.setup_geometry()
        self.setup_ui()

        # Start the visibility manager loop
        self.root.after(self.config["refresh_ms"], self.manage_visibility)

    def setup_geometry(self):
        """Calculate and set window position based on configuration"""
        screen_w = self.root.winfo_screenwidth()
        screen_h = self.root.winfo_screenheight()

        size = self.config["button_size"]
        margin = self.config["margin"]

        # Calculate position based on corner preference
        position = self.config["position"]
        if position == "top-right":
            x = screen_w - size - margin
            y = margin
        elif position == "top-left":
            x = margin
            y = margin
        elif position == "bottom-right":
            x = screen_w - size - margin
            y = screen_h - size - margin
        elif position == "bottom-left":
            x = margin
            y = screen_h - size - margin
        else:
            # Default to top-right
            x = screen_w - size - margin
            y = margin

        self.root.geometry(f"{size}x{size}+{x}+{y}")

    def setup_ui(self):
        """Create the home button"""
        self.root.configure(bg=self.config["bg_color"])

        btn_font = ("Helvetica", self.config["font_size"], "bold")

        self.home_btn = tk.Button(
            self.root,
            text=self.config["button_text"],
            font=btn_font,
            bg=self.config["button_bg"],
            fg=self.config["button_fg"],
            command=self.go_home,
            bd=0,
            highlightthickness=0,
        )
        self.home_btn.pack(expand=True, fill="both")

    def is_browser_running(self):
        """Check if the target browser process is running"""
        browser_name = self.config["browser_process"]
        for proc in psutil.process_iter(attrs=["name"]):
            try:
                if proc.info["name"] and browser_name in proc.info["name"]:
                    return True
            except psutil.NoSuchProcess:
                continue
        return False

    def go_home(self):
        """Close the browser to return to MagicMirror"""
        try:
            subprocess.run(["pkill", self.config["browser_process"]], check=False)
        except Exception as e:
            print(f"Error closing browser: {e}")

    def manage_visibility(self):
        """Show/hide the button based on browser status"""
        if self.is_browser_running():
            self.root.deiconify()
            self.root.lift()
            self.root.attributes("-topmost", True)
        else:
            self.root.withdraw()

        self.root.after(self.config["refresh_ms"], self.manage_visibility)

    def run(self):
        """Start the Tkinter main loop"""
        self.root.mainloop()


def parse_arguments():
    """Parse command-line arguments for configuration"""
    parser = argparse.ArgumentParser(description="Home Button Overlay for Browser")

    parser.add_argument(
        "--browser",
        default=DEFAULT_CONFIG["browser_process"],
        help="Browser process name to monitor (default: firefox)"
    )
    parser.add_argument(
        "--position",
        choices=["top-right", "top-left", "bottom-right", "bottom-left"],
        default=DEFAULT_CONFIG["position"],
        help="Button position on screen (default: top-right)"
    )
    parser.add_argument(
        "--size",
        type=int,
        default=DEFAULT_CONFIG["button_size"],
        help="Button size in pixels (default: 60)"
    )
    parser.add_argument(
        "--margin",
        type=int,
        default=DEFAULT_CONFIG["margin"],
        help="Margin from screen edge in pixels (default: 10)"
    )
    parser.add_argument(
        "--bg-color",
        default=DEFAULT_CONFIG["bg_color"],
        help="Background color (default: #222222)"
    )
    parser.add_argument(
        "--button-bg",
        default=DEFAULT_CONFIG["button_bg"],
        help="Button background color (default: #444444)"
    )
    parser.add_argument(
        "--button-fg",
        default=DEFAULT_CONFIG["button_fg"],
        help="Button foreground color (default: white)"
    )
    parser.add_argument(
        "--button-text",
        default=DEFAULT_CONFIG["button_text"],
        help="Button text/emoji (default: 🏠)"
    )
    parser.add_argument(
        "--font-size",
        type=int,
        default=DEFAULT_CONFIG["font_size"],
        help="Button font size (default: 24)"
    )

    return parser.parse_args()


if __name__ == "__main__":
    args = parse_arguments()

    config = {
        "browser_process": args.browser,
        "position": args.position,
        "button_size": args.size,
        "margin": args.margin,
        "bg_color": args.bg_color,
        "button_bg": args.button_bg,
        "button_fg": args.button_fg,
        "button_text": args.button_text,
        "font_size": args.font_size,
    }

    try:
        button = HomeButton(config)
        button.run()
    except Exception as e:
        print(f"Error starting home button: {e}")
        sys.exit(1)
