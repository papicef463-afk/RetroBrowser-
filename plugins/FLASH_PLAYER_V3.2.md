# Flash Player Plugin v3.2 Documentation

## Overview
Flash Player v3.2 is an advanced Flash content player plugin for RetroBrowser that enables playback of Flash (.swf) files using the Ruffle emulator.

## Features

### Core Features
- **SWF Playback**: Full support for Flash SWF files from versions 1-11
- **Ruffle Integration**: Uses Ruffle emulator for cross-browser Flash compatibility
- **Multiple MIME Types**: Supports all standard Flash MIME types
- **Player Instances**: Manage multiple simultaneous Flash players
- **DOM Processing**: Automatically replace Flash objects/embeds in web pages

### Playback Controls
- ▶ Play/Resume playback
- ⏸ Pause playback
- ⏹ Stop playback
- ⛶ Fullscreen support
- 🔊 Volume control (0-100%)

### Advanced Features
- Plugin registry system
- Dynamic plugin loading
- Plugin configuration
- Player disposal and cleanup
- Flash file validation
- Active player tracking

## Installation

1. Include the plugin scripts in your HTML:
```html
<script src="plugins/plugin-manager.js"></script>
<script src="plugins/plugin-registry.js"></script>
<script src="plugins/plugin-loader.js"></script>
<script src="plugins/flash-player-v3.2.js"></script>
```

2. Access the global plugin instance:
```javascript
window.FlashPlayerPlugin // Main plugin instance
window.PluginManager      // Plugin manager
window.PluginRegistry     // Plugin registry
```

## API Documentation

### Loading Flash Content

#### Create Player in Container
```javascript
const player = window.FlashPlayerPlugin.createPlayer(
    'containerId',
    'http://example.com/file.swf',
    {
        width: '800px',
        height: '600px',
        autoplay: true,
        allowFullscreen: true
    }
);
```

#### Load Flash Directly
```javascript
const player = window.FlashPlayerPlugin.loadFlash('http://example.com/file.swf', {
    width: '100%',
    height: '400px',
    autoplay: true,
    backgroundColor: '#000000',
    allowFullscreen: true
});

document.getElementById('container').appendChild(player);
```

#### Auto-process Page Flash Content
```javascript
// Automatically replaces all embed/object tags with Ruffle players
window.FlashPlayerPlugin.processFlashContent();
```

### Playback Control

```javascript
const playerId = player.id;

// Play
window.FlashPlayerPlugin.play(playerId);

// Pause
window.FlashPlayerPlugin.pause(playerId);

// Stop
window.FlashPlayerPlugin.stop(playerId);

// Set volume (0.0 - 1.0)
window.FlashPlayerPlugin.setVolume(playerId, 0.8);

// Toggle fullscreen
window.FlashPlayerPlugin.toggleFullscreen(playerId);
```

### Player Management

```javascript
// Get active player
const activePlayer = window.FlashPlayerPlugin.getActivePlayer();

// List all active players
const players = window.FlashPlayerPlugin.listActivePlayers();

// Dispose specific player
window.FlashPlayerPlugin.dispose(playerId);

// Dispose all players
window.FlashPlayerPlugin.disposeAll();
```

### Plugin Information

```javascript
// Get plugin info
const info = window.FlashPlayerPlugin.getInfo();
console.log(info);
// Output:
// {
//   name: "Flash Player",
//   version: "3.2.0",
//   enabled: true,
//   ruffleLoaded: true,
//   supportedMimes: [...],
//   supportedExtensions: ["swf"],
//   activeInstances: 2,
//   config: {...}
// }
```

### File Validation

```javascript
// Check if MIME type is supported
const isSupported = window.FlashPlayerPlugin.isSupportedMime('application/x-shockwave-flash');

// Check if file extension is supported
const isSupported = window.FlashPlayerPlugin.isSupportedFile('game.swf');

// Validate SWF file (ArrayBuffer)
const isValid = window.FlashPlayerPlugin.validateFlashFile(arrayBuffer);
```

### Configuration

```javascript
// Configure plugin
window.FlashPlayerPlugin.configure({
    autoplay: 'on',
    unmuteOverlay: 'visible',
    backgroundColor: '#000000',
    allowFullscreen: true,
    allowScriptAccess: 'sameDomain'
});
```

## Usage Examples

### Example 1: Simple Flash Player
```html
<div id="flashPlayer"></div>

<script>
window.FlashPlayerPlugin.createPlayer(
    'flashPlayer',
    'game.swf',
    {
        width: '800px',
        height: '600px',
        autoplay: true
    }
);
</script>
```

### Example 2: Custom Controls
```javascript
const playerId = player.id;

document.getElementById('playBtn').addEventListener('click', () => {
    window.FlashPlayerPlugin.play(playerId);
});

document.getElementById('volumeSlider').addEventListener('input', (e) => {
    window.FlashPlayerPlugin.setVolume(playerId, e.target.value / 100);
});
```

### Example 3: Dynamic Loading
```javascript
async function loadFlashFile(url) {
    try {
        const player = window.FlashPlayerPlugin.loadFlash(url);
        document.getElementById('container').appendChild(player);
        
        const info = window.FlashPlayerPlugin.getInfo();
        console.log('Flash Player ready:', info);
    } catch (error) {
        console.error('Failed to load Flash:', error);
    }
}
```

### Example 4: Multiple Players
```javascript
const player1 = window.FlashPlayerPlugin.loadFlash('game1.swf');
const player2 = window.FlashPlayerPlugin.loadFlash('game2.swf');

document.getElementById('container1').appendChild(player1);
document.getElementById('container2').appendChild(player2);

const players = window.FlashPlayerPlugin.listActivePlayers();
console.log('Active players:', players);
```

## Supported MIME Types
- `application/x-shockwave-flash`
- `application/futuresplash`
- `application/x-mswmp`

## Supported File Extensions
- `.swf`

## Configuration Options

```javascript
{
    polyfills: true,           // Enable Ruffle polyfills
    autoplay: 'on',            // Autoplay behavior: 'on', 'off', 'any'
    unmuteOverlay: 'visible',  // Show unmute overlay
    backgroundColor: '#000000', // Player background color
    width: '100%',             // Player width
    height: 'auto',            // Player height
    allowFullscreen: true,     // Allow fullscreen mode
    allowScriptAccess: 'sameDomain' // Script access policy
}
```

## Browser Compatibility
- Chrome/Edge 60+
- Firefox 55+
- Safari 11+
- Opera 47+

## Dependencies
- Ruffle emulator (loaded from CDN)
- Plugin Manager
- Plugin Registry

## Performance Notes
- Ruffle is loaded asynchronously from CDN
- Multiple players can run simultaneously
- Each player instance is tracked independently
- Use `dispose()` to free resources

## Troubleshooting

### Flash Player not loading
1. Check browser console for errors
2. Verify Ruffle CDN is accessible
3. Ensure correct SWF URL format

### Audio/Video not playing
1. Check file format compatibility
2. Verify browser media support
3. Check volume settings

### Fullscreen not working
1. Verify browser fullscreen API support
2. Check `allowFullscreen` configuration
3. Ensure secure context (HTTPS)

## License
MIT License - Part of RetroBrowser Project

## Version History
- v3.2.0 - Current version with advanced features
- v3.1.0 - Previous stable version
- v3.0.0 - Initial release
