# RetroBrowser - Real Web Browser with Retro UI
## Live Web Browsing in a Windows 95/98 Interface

A fully functional web browser with an authentic retro Windows 95/98 aesthetic that lets you browse the **real, live web** with nostalgic styling.

### ✨ Features

#### Real Web Browsing
- **Live URL Navigation**: Browse any website on the internet
- **Full History**: Back/Forward navigation with complete history tracking
- **Reload & Stop**: Full page reload and stop loading controls
- **Address Bar**: Enter any URL and navigate instantly
- **Error Handling**: Graceful error messages for failed connections
- **Status Bar**: Real-time loading status updates

#### Retro Windows 95/98 UI
- **Authentic Styling**: Genuine Windows 95/98 window chrome
- **Title Bar**: Minimize, maximize, close buttons
- **Menu Bar**: Classic menu structure
- **Toolbar**: Navigation buttons with retro styling
- **Status Bar**: Real-time page information

#### Live World Clock
- **12 Time Zones**: Shows current time in major cities worldwide
- **Real-time Updates**: Live clock that updates every second
- **Digital Display**: Retro 7-segment display styling
- **Interactive Modal**: Click any clock for enlarged view
- **Time Zone Conversion**: See all zones with time differences

### 🚀 Quick Start

1. **Open the App**
   - Open `index.html` in any modern browser
   - Browser will load with example.com as homepage

2. **Browse Websites**
   - Type URL in address bar (e.g., `google.com`, `github.com`)
   - Press Enter or click "Go"
   - Use Back/Forward buttons to navigate history
   - Click "Reload" to refresh page

3. **View World Clock**
   - See current time in 12 major time zones at top
   - Click any clock for enlarged view with all zones
   - Times update in real-time every second

### 🔧 How It Works

#### Real Browser Engine
- Uses **iframe** for actual web content rendering
- Direct HTTP/HTTPS requests to live websites
- Full history stack with back/forward navigation
- Real page load events and error handling

#### Architecture
```
index.html           - Main UI structure
real-browser.js      - Browser navigation logic
world-clock.js       - Time zone display system
retro-styles.css     - Windows 95/98 styling
clock.css           - Digital clock styling
```

### 📋 Supported Features

✅ Navigate to any website
✅ Back/Forward history navigation
✅ Reload current page
✅ Stop page loading
✅ Full URL support (HTTP/HTTPS)
✅ Real-time status updates
✅ 12 world time zones with live updates
✅ Enlarged clock view with time zone list
✅ Mobile responsive design
✅ Cross-browser compatible

### ⚠️ Limitations

- **CORS Restrictions**: Some sites may not load due to CORS policies
- **Cross-Origin Content**: Mixed content warnings on some sites
- **Third-party Embeds**: Some embedded content may not work
- **Iframe Sandbox**: Limited access to page internals
- **Mobile Sites**: Some mobile-optimized sites may not display perfectly

### 🌐 Recommended Sites to Test

- `https://example.com` - Simple test page
- `https://google.com` - Search engine
- `https://github.com` - Developer platform
- `https://wikipedia.org` - Encyclopedia
- `https://hacker-news.firebaseapp.com` - News aggregator
- `https://oldschool.runescape.com` - Legacy gaming
- `https://www.html5zombies.com` - Retro gaming
- `https://98.js.org` - Windows 98 emulator (meta!)

### 🎨 Customization

#### Change Homepage
Edit `real-browser.js`:
```javascript
this.currentURL = 'https://your-site.com';
```

#### Add More Time Zones
Edit `world-clock.js` timezones array:
```javascript
this.timezones = [
    { name: 'EST', offset: -5, city: 'New York' },
    // Add more...
];
```

#### Modify Retro Styling
Edit `retro-styles.css` to change:
- Window colors and borders
- Button styles
- Font sizes and families
- Overall aesthetic

### 📱 Mobile Support

- Responsive design works on all devices
- Touch-friendly controls
- Optimized for small screens
- Full functionality on mobile browsers

### 🔒 Security Notes

- Sites with CORS restrictions won't load
- HTTPS recommended for security
- No site tracking or cookies between sessions
- Content is loaded directly from servers

### 🐛 Troubleshooting

**Page won't load:**
- Check internet connection
- Try adding `https://` prefix
- Check if site has CORS protection
- Try a different website

**Time zones showing wrong:**
- Check system time is correct
- Zones use UTC offsets (may not account for DST)
- Click clock for current timezone info

**UI looks wrong:**
- Clear browser cache (Ctrl+Shift+Del)
- Disable browser extensions
- Try a different browser

### 💡 Tips

- Bookmark your favorite sites by copying from address bar
- Use browser history (Back button) frequently
- Some retro websites work great: Oldweb.today, archive.org
- Check console (F12) for error details

### 🎯 Future Enhancements

- [ ] Bookmarks system
- [ ] Browser tabs
- [ ] Search bar integration
- [ ] Download manager
- [ ] Screenshot tool
- [ ] Custom time zones
- [ ] Theme selector
- [ ] Offline mode

### 📄 License

MIT License - Free to use and modify

### 🎉 Enjoy!

Browse the real web with authentic retro style! Check the status bar and watch the world clock while you surf.

---

**RetroBrowser - Where the past meets the present** 🕰️🌐
