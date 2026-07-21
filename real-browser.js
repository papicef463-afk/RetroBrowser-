/**
 * Real RetroBrowser - Functional Web Browser
 * Actual live web browsing with retro Windows 95/98 interface
 */

class RealRetroBrowser {
    constructor() {
        this.history = [];
        this.historyIndex = -1;
        this.currentURL = 'https://example.com';
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialPage();
    }

    /**
     * Setup event listeners for browser controls
     */
    setupEventListeners() {
        // Address bar
        document.getElementById('goBtn').addEventListener('click', () => this.navigate());
        document.getElementById('addressBar').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.navigate();
        });

        // Navigation buttons
        document.getElementById('backBtn').addEventListener('click', () => this.goBack());
        document.getElementById('forwardBtn').addEventListener('click', () => this.goForward());
        document.getElementById('reloadBtn').addEventListener('click', () => this.reload());
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());

        // Iframe load events
        const frame = document.getElementById('browserFrame');
        frame.addEventListener('load', () => this.onPageLoad());
        frame.addEventListener('error', () => this.onPageError());
    }

    /**
     * Load initial page
     */
    loadInitialPage() {
        this.updateStatus('Loading example.com...');
        this.loadURL(this.currentURL);
    }

    /**
     * Navigate to URL from address bar
     */
    navigate() {
        let url = document.getElementById('addressBar').value.trim();
        
        // Add http:// if no protocol specified
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        this.loadURL(url);
    }

    /**
     * Load URL in iframe
     */
    loadURL(url) {
        this.currentURL = url;
        document.getElementById('addressBar').value = url;
        
        // Add to history
        if (this.history.length === 0 || this.history[this.history.length - 1] !== url) {
            this.history.push(url);
            this.historyIndex = this.history.length - 1;
        }

        // Load in iframe
        const frame = document.getElementById('browserFrame');
        this.isLoading = true;
        this.updateStatus(`Loading ${new URL(url).hostname}...`);
        
        frame.src = url;
    }

    /**
     * Go back in history
     */
    goBack() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const url = this.history[this.historyIndex];
            document.getElementById('browserFrame').src = url;
            document.getElementById('addressBar').value = url;
            this.updateStatus(`Back: ${new URL(url).hostname}`);
        }
    }

    /**
     * Go forward in history
     */
    goForward() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            const url = this.history[this.historyIndex];
            document.getElementById('browserFrame').src = url;
            document.getElementById('addressBar').value = url;
            this.updateStatus(`Forward: ${new URL(url).hostname}`);
        }
    }

    /**
     * Reload page
     */
    reload() {
        this.updateStatus('Reloading...');
        document.getElementById('browserFrame').src = this.currentURL;
    }

    /**
     * Stop loading
     */
    stop() {
        this.isLoading = false;
        this.updateStatus('Stopped');
    }

    /**
     * Handle page load complete
     */
    onPageLoad() {
        this.isLoading = false;
        const url = this.history[this.historyIndex];
        const hostname = new URL(url).hostname;
        this.updateStatus(`Document: Done - ${hostname}`);
        document.getElementById('pageInfo').textContent = `Document: ${hostname} - Loaded`;
    }

    /**
     * Handle page load error
     */
    onPageError() {
        this.isLoading = false;
        this.updateStatus('Error loading page - Check URL or network connection');
        document.getElementById('pageInfo').textContent = 'Document: Error loading page';
    }

    /**
     * Update status bar
     */
    updateStatus(message) {
        document.getElementById('statusText').textContent = message;
    }

    /**
     * Get page title
     */
    getPageTitle() {
        try {
            return document.getElementById('browserFrame').contentDocument?.title || 'Untitled';
        } catch (e) {
            return 'Untitled (Cross-origin)';
        }
    }
}

// Initialize browser when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.RealRetroBrowser = new RealRetroBrowser();
    });
} else {
    window.RealRetroBrowser = new RealRetroBrowser();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RealRetroBrowser;
}
