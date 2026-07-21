/**
 * RetroBrowser - Main Application
 * Web time machine with year archive from 1996 to 2026
 */

class RetroBrowser {
    constructor() {
        this.currentYear = 2024;
        this.history = [];
        this.historyIndex = -1;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTimeline();
        this.displayYear(this.currentYear);
        this.loadFlashPlayer();
    }

    setupEventListeners() {
        const yearSlider = document.getElementById('yearSlider');
        const yearDisplay = document.getElementById('yearDisplay');
        
        yearSlider.addEventListener('input', (e) => {
            const year = parseInt(e.target.value);
            this.selectYear(year);
            yearDisplay.textContent = year;
        });

        document.getElementById('addressBar').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.loadPage();
        });

        document.getElementById('goBtn').addEventListener('click', () => this.loadPage());
        document.getElementById('backBtn').addEventListener('click', () => this.navigateBack());
        document.getElementById('forwardBtn').addEventListener('click', () => this.navigateForward());
        document.getElementById('reloadBtn').addEventListener('click', () => this.reloadPage());
        document.getElementById('stopBtn').addEventListener('click', () => this.stopLoading());
    }

    loadFlashPlayer() {
        const checkFlash = setInterval(() => {
            if (window.FlashPlayerPlugin) {
                clearInterval(checkFlash);
                console.log('Flash Player plugin loaded');
            }
        }, 500);
    }

    renderTimeline() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';

        for (let year = 1996; year <= 2026; year += 3) {
            const yearBtn = document.createElement('div');
            yearBtn.className = 'timeline-year';
            if (year === this.currentYear) yearBtn.classList.add('active');
            yearBtn.textContent = year;
            yearBtn.addEventListener('click', () => this.selectYear(year));
            timeline.appendChild(yearBtn);
        }
    }

    selectYear(year) {
        this.currentYear = year;
        document.getElementById('yearSlider').value = year;
        document.getElementById('yearDisplay').textContent = year;
        this.displayYear(year);
        this.renderTimeline();
    }

    displayYear(year) {
        const data = YEAR_ARCHIVE_DATA[year] || YEAR_ARCHIVE_DATA[2024];
        const grid = document.getElementById('archiveGrid');
        grid.innerHTML = '';

        const titleCard = document.createElement('div');
        titleCard.style.gridColumn = '1 / -1';
        titleCard.innerHTML = `
            <div style="background: #e0e0ff; border: 2px solid #4444aa; padding: 10px; margin-bottom: 10px;">
                <h1 style="color: #000080; margin: 0 0 5px 0;">${data.title}</h1>
                <p style="margin: 0; color: #333; font-size: 13px;">${data.description}</p>
            </div>
        `;
        grid.appendChild(titleCard);

        const eventsCard = document.createElement('div');
        eventsCard.style.gridColumn = '1 / -1';
        eventsCard.innerHTML = `
            <div style="background: #fff; border: 1px solid #999; padding: 10px; margin-bottom: 10px;">
                <h3 style="color: #000080; margin: 0 0 10px 0; font-size: 13px;">📅 Key Events of ${year}</h3>
                ${data.events.map(e => `
                    <div style="margin-bottom: 8px; padding: 5px; background: #f5f5f5; border-left: 3px solid #4444aa;">
                        <strong>${e.date}</strong>: ${e.title}<br>
                        <small>${e.description}</small>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(eventsCard);

        const techCard = document.createElement('div');
        techCard.style.gridColumn = '1 / -1';
        techCard.innerHTML = `
            <div style="background: #fff; border: 1px solid #999; padding: 10px; margin-bottom: 10px;">
                <h3 style="color: #000080; margin: 0 0 10px 0; font-size: 13px;">⚙️ Technologies</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                    ${data.technologies.map(t => `
                        <span style="background: #e0e0ff; border: 1px solid #4444aa; padding: 3px 8px; border-radius: 3px; font-size: 11px;">
                            ${t}
                        </span>
                    `).join('')}
                </div>
                <p style="margin: 10px 0 0 0; font-size: 11px; color: #666;">
                    <strong>Bandwidth:</strong> ${data.bandwidth}<br>
                    <strong>Browsers:</strong> ${data.browsers.join(', ')}
                </p>
            </div>
        `;
        grid.appendChild(techCard);

        data.websites.forEach((site, index) => {
            const card = document.createElement('div');
            card.className = 'archive-card';
            card.innerHTML = `
                <div class="archive-card-title">🌐 ${site.name}</div>
                <div class="archive-card-description">${site.description}</div>
                <div class="archive-card-footer">Type: ${site.type}</div>
            `;
            card.addEventListener('click', () => this.showWebsiteInfo(year, site));
            grid.appendChild(card);
        });

        document.getElementById('statusText').textContent = `Viewing ${year} archive (${data.websites.length} websites)`;
        this.updatePageInfo(year);
    }

    showWebsiteInfo(year, website) {
        const modal = document.getElementById('yearModal');
        const modalBody = document.getElementById('modalBody');

        modalBody.innerHTML = `
            <h2>${website.name} (${year})</h2>
            <p><strong>Description:</strong> ${website.description}</p>
            <p><strong>Type:</strong> ${website.type}</p>
            <p><strong>Era:</strong> ${YEAR_ARCHIVE_DATA[year].title}</p>
            <hr style="border: none; border-top: 1px solid #999; margin: 10px 0;">
            <p><em>This is a simulated historical view. For actual archived websites, visit the Internet Archive.</em></p>
            <button onclick="document.getElementById('yearModal').classList.remove('active')" style="background: #c0c0c0; border: 2px outset #ffffff; border-right-color: #808080; border-bottom-color: #808080; padding: 5px 15px; cursor: pointer;">
                Close
            </button>
        `;

        modal.classList.add('active');
    }

    loadPage() {
        const url = document.getElementById('addressBar').value;
        document.getElementById('statusText').textContent = `Loading ${url}...`;
        
        setTimeout(() => {
            document.getElementById('statusText').textContent = `Document: Done - ${Math.floor(Math.random() * 1000000)} Bytes`;
        }, 1000);
    }

    navigateBack() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const year = this.history[this.historyIndex];
            this.selectYear(year);
        }
    }

    navigateForward() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            const year = this.history[this.historyIndex];
            this.selectYear(year);
        }
    }

    reloadPage() {
        document.getElementById('statusText').textContent = 'Reloading...';
        setTimeout(() => {
            document.getElementById('statusText').textContent = 'Document: Done';
        }, 500);
    }

    stopLoading() {
        document.getElementById('statusText').textContent = 'Stopped';
    }

    updatePageInfo(year) {
        const data = YEAR_ARCHIVE_DATA[year];
        document.getElementById('pageInfo').textContent = 
            `Document: ${year} - ${data.websites.length} websites - 0 Bytes`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.RetroBrowser = new RetroBrowser();
    
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('yearModal').classList.remove('active');
    });

    document.getElementById('yearModal').addEventListener('click', (e) => {
        if (e.target.id === 'yearModal') {
            document.getElementById('yearModal').classList.remove('active');
        }
    });
});