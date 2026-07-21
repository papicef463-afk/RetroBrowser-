# RetroBrowser - Mobile Web App
## Retro Browser with Year Archive (1996-2026)

A nostalgic web application that takes you back in time through internet history! Browse through different eras of the web, from the early days of HTML in 1996 to the AI-powered web of 2024 and beyond to 2026.

### 🎮 Features

#### Core Features
- **Time Travel Browser**: Browse web history from 1996 to 2026
- **Year Archive**: View key events, technologies, and websites for each year
- **Retro UI**: Authentic Windows 95/98 aesthetic
- **Flash Player v3.2**: Full Flash SWF content support with Ruffle emulator
- **Mobile Responsive**: Works on all devices and screen sizes
- **Plugin System**: Extensible plugin architecture

#### Year Archives Include
- **1996**: The Dawn of Web - HTML 3.2, CSS, JavaScript, Flash
- **2000**: Y2K Millennium - Dot-com boom era
- **2005**: Web 2.0 Dawn - AJAX, YouTube, Flickr
- **2010**: Mobile Revolution - iPad, iPhone 4, Instagram
- **2015**: Cloud & Mobile - ES6, PWA, Cloud services
- **2020**: Pandemic Era - COVID-19, Video conferencing
- **2024**: AI & Modern Web - ChatGPT, AI assistants
- **2026**: Future Web - AR/VR, Web4, Quantum computing

### 📁 Project Structure

```
RetroBrowser-/
├── index.html                      # Main app entry point
├── app.js                          # Main application logic
├── data.js                         # Historical archive data
├── styles.css                      # Main styles
├── retro-styles.css               # Retro Windows 95/98 theme
├── plugins/
│   ├── plugin-manager.js          # Plugin system manager
│   ├── plugin-registry.js         # Plugin registry & configuration
│   ├── plugin-loader.js           # Dynamic plugin loader
│   ├── plugin-manager.html        # Plugin management UI
│   ├── flash-player-v3.2.js       # Flash Player plugin
│   ├── flash-player-panel.js      # Flash Player controls
│   ├── flash-player-demo.html     # Flash Player demo
│   └── FLASH_PLAYER_V3.2.md      # Flash Player docs
└── README.md                       # This file
```

### 🚀 Getting Started

#### Local Setup
1. Clone the repository
2. Open `index.html` in a modern web browser
3. Use the year slider to navigate through web history
4. Click on websites to view more information

#### Remote Setup
1. Deploy to GitHub Pages or any web hosting
2. Access via `https://username.github.io/RetroBrowser-`
3. Works on mobile devices via responsive design

### 💻 Usage

#### Navigating the Archive
- **Year Slider**: Drag to select year (1996-2026)
- **Timeline**: Click on year markers for quick navigation
- **Address Bar**: Standard browser navigation
- **Back/Forward**: Browser history navigation

#### Using Flash Player
1. Open `plugins/flash-player-demo.html` in browser
2. Enter a SWF file URL in the input field
3. Click "Load" to play Flash content
4. Use playback controls:
   - **▶ Play**: Start playback
   - **⏸ Pause**: Pause playback
   - **⏹ Stop**: Stop playback
   - **⛶ Fullscreen**: Enter fullscreen mode
5. Adjust volume with the slider

#### Plugin Management
1. Open `plugins/plugin-manager.html`
2. View list of available plugins
3. Click "Load All Plugins" to initialize
4. Manage individual plugins as needed

### 🔌 Flash Player v3.2 API

#### Basic Usage
```javascript
// Load a Flash file
const player = window.FlashPlayerPlugin.loadFlash('game.swf', {
    width: '800px',
    height: '600px',
    autoplay: true
});

// Add to page
document.getElementById('container').appendChild(player);

// Control playback
window.FlashPlayerPlugin.play(player.id);
window.FlashPlayerPlugin.pause(player.id);
window.FlashPlayerPlugin.setVolume(player.id, 0.8);
```

#### API Methods
- `loadFlash(url, options)` - Create Flash player
- `createPlayer(containerId, url, options)` - Add to container
- `play(playerId)` - Start playback
- `pause(playerId)` - Pause playback
- `stop(playerId)` - Stop playback
- `setVolume(playerId, value)` - Set volume (0-1)
- `toggleFullscreen(playerId)` - Fullscreen mode
- `processFlashContent()` - Auto-replace Flash on page
- `dispose(playerId)` - Remove player
- `getInfo()` - Get plugin information

See `plugins/FLASH_PLAYER_V3.2.md` for full documentation.

### 🎨 Customization

#### Changing the Theme
Edit `retro-styles.css` to modify:
- Colors and gradients
- Window borders and buttons
- Font styles
- Timeline appearance

#### Adding New Years
Edit `data.js` to add new year entries:
```javascript
2027: {
    year: 2027,
    title: "Year Title",
    description: "Description of the era",
    events: [...],
    websites: [...],
    technologies: [...],
    bandwidth: "Technology specs",
    browsers: ["Browser list"]
}
```

### 📱 Mobile Optimization

- Responsive grid layout
- Touch-friendly controls
- Mobile-first design
- Fast load times
- Optimized assets

### 🔧 Browser Support

- Chrome/Edge 60+
- Firefox 55+
- Safari 11+
- Opera 47+
- Mobile browsers (iOS Safari, Chrome Mobile)

### ⚡ Performance

- Minimal dependencies
- Lazy loading for Flash Player
- Optimized CSS and JavaScript
- Efficient DOM manipulation
- Mobile-optimized images

### 📄 License

MIT License - Free to use and modify

### 🙏 Credits

- **Ruffle**: Flash emulator (https://ruffle.rs)
- **Internet Archive**: Inspiration for time-travel browsing
- **Retro UI Design**: Windows 95/98 aesthetic

### 🐛 Troubleshooting

#### Flash Player not loading
- Check browser console for errors
- Verify CDN access to Ruffle
- Ensure correct SWF file URL format

#### Plugin not appearing
- Clear browser cache
- Check plugin-loader.js is loaded
- Verify plugin files exist

#### Performance issues
- Reduce number of active Flash players
- Disable autoplay for Flash content
- Use modern browser for best performance

### 📞 Support

For issues, questions, or contributions:
1. Check the documentation
2. Review existing issues
3. Create a new GitHub issue with details

### 🔮 Future Enhancements

- [ ] More historical years (1990s early years)
- [ ] Real website screenshots
- [ ] Sound and music from each era
- [ ] Downloadable offline version
- [ ] Additional plugins (PDF, Video, etc.)
- [ ] User themes and customization
- [ ] Multi-language support
- [ ] API for adding custom archives

---

**Made with ❤️ for web nostalgia lovers**
