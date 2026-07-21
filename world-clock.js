/**
 * World Clock Display System
 * Shows current time in multiple time zones with retro styling
 */

class WorldClock {
    constructor() {
        this.timezones = [
            { name: 'UTC', offset: 0, city: 'UTC' },
            { name: 'EST', offset: -5, city: 'New York' },
            { name: 'CST', offset: -6, city: 'Chicago' },
            { name: 'MST', offset: -7, city: 'Denver' },
            { name: 'PST', offset: -8, city: 'Los Angeles' },
            { name: 'GMT', offset: 0, city: 'London' },
            { name: 'CET', offset: 1, city: 'Paris' },
            { name: 'EET', offset: 2, city: 'Cairo' },
            { name: 'IST', offset: 5.5, city: 'New Delhi' },
            { name: 'JST', offset: 9, city: 'Tokyo' },
            { name: 'AEST', offset: 10, city: 'Sydney' },
            { name: 'NZST', offset: 12, city: 'Auckland' }
        ];
        this.localTime = new Date();
        this.init();
    }

    init() {
        this.renderClocks();
        this.startClock();
    }

    getTimeInTimezone(offset) {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const tz = new Date(utc + (3600000 * offset));
        return tz;
    }

    formatDigitalTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    formatAmPm(date) {
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${minutes} ${ampm}`;
    }

    getDayName(date) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    }

    renderClocks() {
        const container = document.getElementById('clocksContainer');
        if (!container) return;
        container.innerHTML = '';

        this.timezones.forEach((tz) => {
            const timeInTz = this.getTimeInTimezone(tz.offset);
            const digitalTime = this.formatDigitalTime(timeInTz);
            const day = this.getDayName(timeInTz);

            const clockElement = document.createElement('div');
            clockElement.className = 'digital-clock';
            clockElement.innerHTML = `
                <div class="clock-header">${tz.city}</div>
                <div class="clock-time" data-timezone="${tz.name}">${digitalTime}</div>
                <div class="clock-footer">${tz.name} (${day})</div>
            `;
            clockElement.addEventListener('click', () => this.showEnlargedClock(tz));
            container.appendChild(clockElement);
        });
    }

    updateClocks() {
        this.timezones.forEach((tz) => {
            const timeInTz = this.getTimeInTimezone(tz.offset);
            const digitalTime = this.formatDigitalTime(timeInTz);
            const clockElement = document.querySelector(`[data-timezone="${tz.name}"]`);
            
            if (clockElement) {
                clockElement.textContent = digitalTime;
                const seconds = timeInTz.getSeconds();
                if (seconds === 0) {
                    clockElement.classList.add('pulse');
                    setTimeout(() => clockElement.classList.remove('pulse'), 500);
                }
            }
        });

        const statusTime = document.getElementById('timeStatus');
        if (statusTime) {
            const now = new Date();
            const localTime = this.formatDigitalTime(now);
            statusTime.textContent = `⏰ ${localTime}`;
        }
    }

    startClock() {
        this.updateClocks();
        setInterval(() => this.updateClocks(), 1000);
    }

    showEnlargedClock(timezone) {
        const modal = document.getElementById('clockModal');
        if (!modal) return;

        const enlargedClock = document.getElementById('enlargedClock');
        const timezoneList = document.getElementById('timezoneList');

        const timeInTz = this.getTimeInTimezone(timezone.offset);
        const digitalTime = this.formatDigitalTime(timeInTz);
        const ampmTime = this.formatAmPm(timeInTz);
        const day = this.getDayName(timeInTz);
        const date = timeInTz.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        enlargedClock.innerHTML = `
            <div class="large-time">${digitalTime}</div>
            <div class="large-ampm">${ampmTime}</div>
            <div class="large-date">${date}</div>
            <div class="large-timezone">${timezone.city} (${timezone.name})</div>
        `;

        timezoneList.innerHTML = '<h3 style="margin-bottom: 10px;">All Time Zones</h3>';
        this.timezones.forEach(tz => {
            const tzTime = this.getTimeInTimezone(tz.offset);
            const tzDigital = this.formatDigitalTime(tzTime);
            const tzDay = this.getDayName(tzTime);
            
            const item = document.createElement('div');
            item.className = 'timezone-item';
            if (tz.name === timezone.name) item.classList.add('active');
            item.innerHTML = `
                <span class="tz-name">${tz.city}</span>
                <span class="tz-offset">(${tz.name})</span>
                <span class="tz-time">${tzDigital}</span>
                <span class="tz-day">${tzDay}</span>
            `;
            timezoneList.appendChild(item);
        });

        modal.classList.add('active');
    }

    getUTCTime() {
        return new Date();
    }

    getAllTimezones() {
        return this.timezones.map(tz => ({
            ...tz,
            currentTime: this.getTimeInTimezone(tz.offset),
            digitalTime: this.formatDigitalTime(this.getTimeInTimezone(tz.offset))
        }));
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.WorldClock = new WorldClock();
    });
} else {
    window.WorldClock = new WorldClock();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorldClock;
}