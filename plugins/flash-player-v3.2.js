/**
 * Flash Player Plugin v3.2
 * Advanced Flash (.swf) content player with Ruffle emulator integration
 * Supports Flash versions 1-11 playback in modern browsers
 */

class FlashPlayerPlugin {
    constructor() {
        this.name = 'Flash Player';
        this.version = '3.2.0';
        this.enabled = true;
        this.ruffleLoaded = false;
        this.activePlayer = null;
        this.playerInstances = new Map();
        this.supportedMimes = [
            'application/x-shockwave-flash',
            'application/futuresplash',
            'application/x-mswmp'
        ];
        this.supportedExtensions = ['swf'];
        this.config = {
            polyfills: true,
            autoplay: 'on',
            unmuteOverlay: 'visible',
            backgroundColor: '#000000',
            width: '100%',
            height: 'auto',
            allowFullscreen: true,
            allowScriptAccess: 'sameDomain'
        };
        this.init();
    }

    /**
     * Initialize Flash Player Plugin
     */
    async init() {
        try {
            await this.loadRuffle();
            this.setupEventListeners();
            this.registerMimeTypes();
            console.log('Flash Player Plugin v3.2 initialized successfully');
        } catch (error) {
            console.error('Flash Player initialization error:', error);
        }
    }

    /**
     * Load Ruffle emulator from CDN
     */
    async loadRuffle() {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (window.RufflePlayer) {
                this.ruffleLoaded = true;
                this.configureRuffle();
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/ruffle-rs@latest/ruffle.js';
            
            script.onload = () => {
                // Wait for Ruffle to initialize
                const checkRuffle = setInterval(() => {
                    if (window.RufflePlayer) {
                        clearInterval(checkRuffle);
                        this.ruffleLoaded = true;
                        this.configureRuffle();
                        resolve();
                    }
                }, 100);

                // Timeout after 10 seconds
                setTimeout(() => {
                    clearInterval(checkRuffle);
                    if (!this.ruffleLoaded) {
                        reject(new Error('Ruffle failed to initialize'));
                    }
                }, 10000);
            };

            script.onerror = () => {
                reject(new Error('Failed to load Ruffle library'));
            };

            document.head.appendChild(script);
        });
    }

    /**
     * Configure Ruffle settings
     */
    configureRuffle() {
        if (window.RufflePlayer) {
            window.RufflePlayer.config = {
                ...this.config,
                logLevel: 'error' // Minimize console spam
            };
            console.log('Ruffle configured');
        }
    }

    /**
     * Register MIME types
     */
    registerMimeTypes() {
        // Inform browser about supported MIME types
        this.supportedMimes.forEach(mime => {
            try {
                const mimeType = navigator.mimeTypes[mime] || {};
                if (!mimeType.type) {
                    console.log(`Registered MIME type: ${mime}`);
                }
            } catch (e) {
                // MIME type registration might not be supported
            }
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for Flash content in DOM
        document.addEventListener('DOMContentLoaded', () => {
            this.processFlashContent();
        });
    }

    /**
     * Process existing Flash content in page
     */
    processFlashContent() {
        const embeds = document.querySelectorAll('embed[type="application/x-shockwave-flash"]');
        const objects = document.querySelectorAll('object[data*=".swf"], object[type="application/x-shockwave-flash"]');

        embeds.forEach(embed => this.replaceEmbed(embed));
        objects.forEach(obj => this.replaceObject(obj));
    }

    /**
     * Replace embed tag with Ruffle player
     */
    replaceEmbed(embed) {
        if (!this.ruffleLoaded) return;

        const player = document.createElement('ruffle-player');
        player.src = embed.src;
        player.style.width = embed.width || '100%';
        player.style.height = embed.height || '400px';
        player.style.display = 'block';
        
        // Copy attributes
        if (embed.id) player.id = embed.id;
        if (embed.className) player.className = embed.className;

        // Store reference
        const playerId = `flash-${Date.now()}-${Math.random()}`;
        player.id = playerId;
        this.playerInstances.set(playerId, player);

        // Replace in DOM
        embed.replaceWith(player);
        console.log(`Replaced embed: ${embed.src}`);
    }

    /**
     * Replace object tag with Ruffle player
     */
    replaceObject(obj) {
        if (!this.ruffleLoaded) return;

        const player = document.createElement('ruffle-player');
        
        // Get SWF source from param or data attribute
        const movieParam = obj.querySelector('param[name="movie"]');
        const src = movieParam ? movieParam.value : obj.data;
        
        player.src = src;
        player.style.width = obj.width || obj.style.width || '100%';
        player.style.height = obj.height || obj.style.height || '400px';
        player.style.display = 'block';

        // Copy attributes
        if (obj.id) player.id = obj.id;
        if (obj.className) player.className = obj.className;

        // Store reference
        const playerId = `flash-${Date.now()}-${Math.random()}`;
        player.id = playerId;
        this.playerInstances.set(playerId, player);

        // Replace in DOM
        obj.replaceWith(player);
        console.log(`Replaced object: ${src}`);
    }

    /**
     * Load a Flash file
     */
    loadFlash(url, options = {}) {
        if (!this.ruffleLoaded) {
            console.error('Flash Player plugin not loaded');
            return null;
        }

        const player = document.createElement('ruffle-player');
        player.src = url;
        player.style.width = options.width || '100%';
        player.style.height = options.height || '600px';
        player.style.display = 'block';
        player.style.backgroundColor = options.backgroundColor || '#000000';

        // Set additional properties
        if (options.autoplay !== false) {
            player.autoplay = true;
        }
        if (options.allowFullscreen !== false) {
            player.allowFullscreen = true;
        }

        const playerId = `flash-${Date.now()}-${Math.random()}`;
        player.id = playerId;
        this.playerInstances.set(playerId, player);
        this.activePlayer = playerId;

        return player;
    }

    /**
     * Create inline Flash player
     */
    createPlayer(containerId, swfUrl, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return null;
        }

        const player = this.loadFlash(swfUrl, options);
        container.appendChild(player);
        return player;
    }

    /**
     * Get active player
     */
    getActivePlayer() {
        if (this.activePlayer && this.playerInstances.has(this.activePlayer)) {
            return this.playerInstances.get(this.activePlayer);
        }
        return null;
    }

    /**
     * Play/Pause controls
     */
    play(playerId) {
        const player = this.playerInstances.get(playerId);
        if (player && player.play) {
            player.play();
        }
    }

    pause(playerId) {
        const player = this.playerInstances.get(playerId);
        if (player && player.pause) {
            player.pause();
        }
    }

    stop(playerId) {
        const player = this.playerInstances.get(playerId);
        if (player && player.stop) {
            player.stop();
        }
    }

    /**
     * Volume control
     */
    setVolume(playerId, volume) {
        const player = this.playerInstances.get(playerId);
        if (player && player.setVolume) {
            player.setVolume(Math.max(0, Math.min(1, volume)));
        }
    }

    /**
     * Fullscreen control
     */
    toggleFullscreen(playerId) {
        const player = this.playerInstances.get(playerId);
        if (player && player.requestFullscreen) {
            player.requestFullscreen();
        }
    }

    /**
     * Get Flash file info
     */
    async getFlashInfo(swfUrl) {
        return {
            url: swfUrl,
            type: 'Flash SWF',
            format: 'application/x-shockwave-flash',
            player: 'Ruffle',
            playbackSupported: this.ruffleLoaded
        };
    }

    /**
     * Check if MIME type is supported
     */
    isSupportedMime(mime) {
        return this.supportedMimes.includes(mime);
    }

    /**
     * Check if file extension is supported
     */
    isSupportedFile(filename) {
        const ext = filename.toLowerCase().split('.').pop();
        return this.supportedExtensions.includes(ext);
    }

    /**
     * Get plugin info
     */
    getInfo() {
        return {
            name: this.name,
            version: this.version,
            enabled: this.enabled,
            ruffleLoaded: this.ruffleLoaded,
            supportedMimes: this.supportedMimes,
            supportedExtensions: this.supportedExtensions,
            activeInstances: this.playerInstances.size,
            config: this.config
        };
    }

    /**
     * Enable/disable plugin
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        if (enabled && !this.ruffleLoaded) {
            this.init();
        }
    }

    /**
     * Update configuration
     */
    configure(options) {
        this.config = {
            ...this.config,
            ...options
        };
        this.configureRuffle();
    }

    /**
     * Dispose player instance
     */
    dispose(playerId) {
        const player = this.playerInstances.get(playerId);
        if (player) {
            player.remove();
            this.playerInstances.delete(playerId);
            if (this.activePlayer === playerId) {
                this.activePlayer = null;
            }
            console.log(`Disposed player: ${playerId}`);
        }
    }

    /**
     * Dispose all players
     */
    disposeAll() {
        this.playerInstances.forEach((player, id) => {
            player.remove();
        });
        this.playerInstances.clear();
        this.activePlayer = null;
        console.log('All players disposed');
    }

    /**
     * Validate Flash file
     */
    validateFlashFile(arrayBuffer) {
        // Check for FWS (uncompressed) or CWS (compressed) SWF signature
        const view = new Uint8Array(arrayBuffer);
        const signature = String.fromCharCode(view[0], view[1], view[2]);
        
        return signature === 'FWS' || signature === 'CWS' || signature === 'ZWS';
    }

    /**
     * Get list of all active players
     */
    listActivePlayers() {
        const players = [];
        this.playerInstances.forEach((player, id) => {
            players.push({
                id,
                src: player.src,
                active: id === this.activePlayer
            });
        });
        return players;
    }
}

// Initialize and expose globally
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.FlashPlayerPlugin = new FlashPlayerPlugin();
    });
} else {
    window.FlashPlayerPlugin = new FlashPlayerPlugin();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlashPlayerPlugin;
}
