# Retro Browser - IE6 Archive Browser

A nostalgic web browser experience styled after Internet Explorer 6, with integrated Wayback Machine archive browsing.

## Features

- **IE6-style UI**: Authentic retro interface with classic window chrome, buttons, and toolbars
- **Wayback Machine Integration**: Browse archived snapshots of any website
- **Timeline View**: See all available snapshots grouped by year
- **Archive Viewer**: View snapshots in an embedded iframe
- **Navigation History**: Back/Forward buttons with full history support
- **Real-time Status Updates**: Loading indicators and status bar

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **External APIs**: Internet Archive Wayback Machine API
- **Styling**: Custom IE6-themed CSS with Tailwind

## Prerequisites

- Node.js 16+ 
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/papicef463-afk/RetroBrowser-.git
cd RetroBrowser-
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Navigate to a URL**: Enter any website URL in the address bar and press Enter or click "Go"
2. **Browse Archive**: Click "Browse Archive" to see available Wayback Machine snapshots
3. **Select a Snapshot**: Choose a year, then select a specific snapshot date
4. **View Archive**: The archived version of the website will display in an iframe
5. **Use Navigation**: Use Back/Forward buttons to navigate through your history

## API Endpoints

### GET `/api/archive/availability`
Check if a URL has archived snapshots.

Query parameters:
- `url`: The website URL to check

Response:
```json
{
  "url": "https://example.com",
  "available": true,
  "closest": { /* snapshot data */ },
  "snapshots": [ /* array of snapshots */ ]
}
```

### GET `/api/archive/search`
Search for archived snapshots of a URL.

Query parameters:
- `url`: The website URL to search

Response:
```json
{
  "url": "https://example.com",
  "snapshots": [
    {
      "timestamp": "20200101000000",
      "status": "200",
      "year": "2020"
    }
  ]
}
```

## Components

- **BrowserWindow**: Main container component with window chrome
- **ToolBar**: Navigation buttons (Back, Forward, Refresh)
- **AddressBar**: URL input field
- **BrowserContent**: Main content area
- **SnapshotSelector**: Timeline view of archived snapshots
- **ArchiveViewer**: Embedded iframe viewer for snapshots
- **StatusBar**: Status and loading information

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will auto-detect Next.js and configure the build
5. Click "Deploy"

### Deploy to other platforms

The application is compatible with any Node.js hosting platform (Railway, Heroku, etc.).

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Best viewed on desktop for authentic IE6 experience

## Known Limitations

- Embedded snapshots may have mixed-content warnings for HTTPS
- Some interactive elements in archived pages may not work perfectly
- Snapshots are limited to first 50 results per URL
- CORS may restrict some archived content

## Future Enhancements

- [ ] Offline snapshot caching
- [ ] Custom theme selector (Windows 95, 98, XP)
- [ ] Search history and bookmarks
- [ ] Multiple tab support
- [ ] Snapshot comparison view
- [ ] Export archived pages
- [ ] Advanced archive search filters

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and feature requests, please open an issue on GitHub.

---

**Enjoy browsing the web like it was! 🕰️**
