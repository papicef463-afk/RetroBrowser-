/**
 * Flash Player Control Panel v3.2
 * User interface for Flash Player plugin management and playback
 */

class FlashPlayerPanel {
    constructor() {
        this.plugin = window.FlashPlayerPlugin;
        this.currentPlayer = null;
        this.init();
    }

    init() {
        this.createPanel();
        this.bindEvents();
    }

    createPanel() {
        const panel = document.createElement('div');
        panel.id = 'flash-player-panel';
        panel.innerHTML = `
            <div style="background: #dfdfdf; border: 2px outset #dfdfdf; border-top-color: #ffffff; border-left-color: #ffffff; border-right-color: #808080; border-bottom-color: #808080; padding: 10px; margin: 10px 0;">
                <div style="background: linear-gradient(to right, #000080, #1084d7); color: white; padding: 2px; margin: -10px -10px 10px -10px; font-weight: bold; font-size: 11px;">
                    🎬 Flash Player v3.2 Control Panel
                </div>
                
                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 5px; font-size: 11px;">Load Flash File:</label>
                    <div style="display: flex; gap: 5px;">
                        <input type="text" id="flashUrl" placeholder="Enter .swf URL" style="flex: 1; padding: 4px; font-size: 11px; border: 2px inset #dfdfdf;">
                        <button id="loadFlashBtn" style="background: #c0c0c0; border: 2px outset #dfdfdf; border-top-color: #ffffff; border-left-color: #ffffff; border-right-color: #808080; border-bottom-color: #808080; padding: 4px 10px; font-size: 11px; cursor: pointer;">Load</button>
                    </div>
                </div>

                <div id="playerContainer" style="background: #000; border: 2px inset #dfdfdf; min-height: 300px; margin-bottom: 10px; position: relative;"></div>

                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-bottom: 10px;">
                    <button id="playBtn" class="flash-control-btn" title="Play">▶ Play</button>
                    <button id="pauseBtn" class="flash-control-btn" title="Pause">⏸ Pause</button>
                    <button id="stopBtn" class="flash-control-btn" title="Stop">⏹ Stop</button>
                    <button id="fullscreenBtn" class="flash-control-btn" title="Fullscreen">⛶ FS</button>
                </div>

                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 5px; font-size: 11px;">Volume:</label>
                    <input type="range" id="volumeSlider" min="0" max="100" value="100" style="width: 100%;">
                </div>

                <div style="background: #ffffff; border: 1px inset #dfdfdf; padding: 5px; font-size: 10px; max-height: 100px; overflow-y: auto;">
                    <div id="playerInfo" style="font-family: monospace;">Ready</div>
                </div>

                <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                    <button id="processFlashBtn" style="background: #c0c0c0; border: 2px outset #dfdfdf; border-top-color: #ffffff; border-left-color: #ffffff; border-right-color: #808080; border-bottom-color: #808080; padding: 4px 10px; font-size: 11px; cursor: pointer;">Process Page Flash</button>
                    <button id="settingsBtn" style="background: #c0c0c0; border: 2px outset #dfdfdf; border-top-color: #ffffff; border-left-color: #ffffff; border-right-color: #808080; border-bottom-color: #808080; padding: 4px 10px; font-size: 11px; cursor: pointer;">Settings</button>
                </div>
            </div>
        `;
        document.body.insertBefore(panel, document.body.firstChild);
    }

    bindEvents() {
        document.getElementById('loadFlashBtn').addEventListener('click', () => this.loadFlash());
        document.getElementById('playBtn').addEventListener('click', () => this.play());
        document.getElementById('pauseBtn').addEventListener('click', () => this.pause());
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());
        document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('volumeSlider').addEventListener('input', (e) => this.setVolume(e.target.value));
        document.getElementById('processFlashBtn').addEventListener('click', () => this.processPageFlash());
        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettings());

        // Allow Enter key to load flash
        document.getElementById('flashUrl').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.loadFlash();
        });
    }

    loadFlash() {
        const url = document.getElementById('flashUrl').value.trim();
        if (!url) {
            alert('Please enter a Flash file URL');
            return;
        }

        const container = document.getElementById('playerContainer');
        container.innerHTML = '';

        const player = this.plugin.loadFlash(url, {
            width: '100%',
            height: '400px'
        });

        container.appendChild(player);
        this.currentPlayer = player.id;
        this.updateInfo(`Loaded: ${url}`);
    }

    play() {
        if (this.currentPlayer) {
            this.plugin.play(this.currentPlayer);
            this.updateInfo('Playing...');
        }
    }

    pause() {
        if (this.currentPlayer) {
            this.plugin.pause(this.currentPlayer);
            this.updateInfo('Paused');
        }
    }

    stop() {
        if (this.currentPlayer) {
            this.plugin.stop(this.currentPlayer);
            this.updateInfo('Stopped');
        }
    }

    setVolume(value) {
        if (this.currentPlayer) {
            this.plugin.setVolume(this.currentPlayer, value / 100);
            this.updateInfo(`Volume: ${value}%`);
        }
    }

    toggleFullscreen() {
        if (this.currentPlayer) {
            this.plugin.toggleFullscreen(this.currentPlayer);
            this.updateInfo('Fullscreen requested');
        }
    }

    processPageFlash() {
        this.plugin.processFlashContent();
        this.updateInfo('Processed page Flash content');
    }

    showSettings() {
        const info = this.plugin.getInfo();
        const settings = {
            ...info,
            config: JSON.stringify(info.config, null, 2)
        };
        alert(JSON.stringify(settings, null, 2));
    }

    updateInfo(message) {
        document.getElementById('playerInfo').textContent = message;
    }
}

// Initialize panel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.FlashPlayerPlugin) {
            window.FlashPlayerPanel = new FlashPlayerPanel();
        }
    });
} else {
    if (window.FlashPlayerPlugin) {
        window.FlashPlayerPanel = new FlashPlayerPanel();
    }
}
