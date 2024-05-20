
# TabFocus Enhancer 🚀

Keep your focus sharp and never miss a moment!

## Overview 🎯

TabFocus Enhancer is a Chrome extension designed to help you maintain focus and manage video playback based on the visibility state of your browser tabs. It ensures you get reminded of important tabs and conserves system resources efficiently.

## 🌟 Features

### Tab Visibility Monitoring 👀
- Listens for changes in the visibility state of your browser tab using the `visibilitychange` event.

### Title Modification 📝
- Appends " - Come back Andro" to the tab title when inactive, reminding you to return.
- Restores the original tab title when active.

### Video Playback Control 🎥
- Pauses videos with the class `video-stream` when the tab is inactive to save resources.
- Resumes video playback when the tab becomes active.

## 🚀 How It Works

### Monitoring Tab Visibility
The extension listens for the `visibilitychange` event, triggered whenever the user switches tabs, minimizes the browser, or otherwise changes the tab's visibility.

### Title Modification
- **Inactive Tab:** Appends " Come back Andro - " to the current tab title as a reminder.
- **Active Tab:** Restores the original tab title.

### Video Playback Control
- **Inactive Tab:** Pauses video elements with the class `video-stream` to save bandwidth and processing power.
- **Active Tab:** Resumes paused videos, ensuring seamless continuation.

## ⚙️ Technical Implementation

### Content Script
The core functionality is implemented in a content script (`content.js`) that runs on all webpages.

### Manifest File
The `manifest.json` file defines the extension, specifying its permissions and the script to be injected into webpages.

## 🎁 Benefits

- **Focus Retention** 🧠: The appended title gently reminds you to return to important tabs.
- **Resource Management** 💻: Pausing videos when the tab is inactive helps save system resources.
- **User-Friendly** 🌐: Automatically manages video playback and provides visual cues without requiring user intervention.

## 🛠️ Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the downloaded/cloned folder.
5. Enjoy a more focused browsing experience!

## 🌐 Contributing

We welcome contributions! Please fork this repository and submit a pull request with your improvements.

## 📄 License

This project is licensed under the MIT License.

Stay focused, save resources, and enhance your browsing experience with TabFocus Enhancer! 🚀

Developed with ❤️ by Andro
