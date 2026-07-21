/**
 * RetroBrowser - Web Archive Data (1996-2026)
 * Historical website snapshots and events data
 */

const YEAR_ARCHIVE_DATA = {
    1996: {
        year: 1996,
        title: "The Dawn of Web",
        description: "Early web era. Netscape Navigator dominates. Websites are simple HTML.",
        events: [
            { date: "Jan 1", title: "HTML 3.2 Released", description: "New tables support added" },
            { date: "May 1", title: "CSS Proposed", description: "Style sheets for the web" },
            { date: "Sep 1", title: "JavaScript Released", description: "Brendan Eich creates JS" },
            { date: "Dec 1", title: "Flash Released", description: "First animated web content" }
        ],
        websites: [
            { name: "Yahoo", description: "Web directory", type: "portal" },
            { name: "Geocities", description: "Personal web spaces", type: "hosting" },
            { name: "Amazon", description: "Online bookstore", type: "ecommerce" },
            { name: "eBay", description: "Online auctions", type: "ecommerce" }
        ],
        technologies: ["HTML 3.2", "CSS", "JavaScript", "Flash", "GIF", "JPEG"],
        bandwidth: "56k modem",
        browsers: ["Netscape Navigator 2.0", "Internet Explorer 2.0"]
    },
    2000: {
        year: 2000,
        title: "Y2K Millennium",
        description: "Dot-com boom. Major internet expansion. Flash animation everywhere.",
        events: [
            { date: "Jan 1", title: "Y2K Survived", description: "No major internet outages" },
            { date: "Mar 1", title: "Dot-com Peak", description: "Stock market at peak" },
            { date: "Sep 1", title: "Flash 5 Released", description: "ActionScript support" },
            { date: "Nov 1", title: "Google IPO Delayed", description: "Google grows quietly" }
        ],
        websites: [
            { name: "Pets.com", description: "Pet supplies ecommerce", type: "defunct" },
            { name: "About.com", description: "Content directory", type: "portal" },
            { name: "AltaVista", description: "Search engine", type: "search" },
            { name: "Napster", description: "File sharing", type: "p2p" }
        ],
        technologies: ["Flash 5", "DHTML", "Streaming Media", "WebTV"],
        bandwidth: "56k - DSL",
        browsers: ["Internet Explorer 5.0", "Netscape Navigator 4.0"]
    },
    2005: {
        year: 2005,
        title: "Web 2.0 Dawn",
        description: "AJAX, Web 2.0 concepts emerge. YouTube, Flickr, Digg launched.",
        events: [
            { date: "Feb 1", title: "YouTube Founded", description: "Video sharing begins" },
            { date: "May 1", title: "Web 2.0 Buzz", description: "Interactive web concepts" },
            { date: "Aug 1", title: "Flickr Acquired", description: "Yahoo acquires photo site" },
            { date: "Oct 1", title: "Reddit Launched", description: "Social news site starts" }
        ],
        websites: [
            { name: "YouTube", description: "Video sharing", type: "social" },
            { name: "Flickr", description: "Photo sharing", type: "social" },
            { name: "Digg", description: "Social news", type: "news" },
            { name: "MySpace", description: "Social network", type: "social" }
        ],
        technologies: ["AJAX", "XHTML", "CSS Layouts", "Flash 8", "RTMP Streaming"],
        bandwidth: "DSL - Cable",
        browsers: ["Firefox 1.0", "Internet Explorer 6.0"]
    },
    2010: {
        year: 2010,
        title: "Mobile Revolution",
        description: "iPad released. Smartphones become mainstream. Flash on decline.",
        events: [
            { date: "Apr 1", title: "iPad Released", description: "Tablet computing begins" },
            { date: "Jun 1", title: "iPhone 4 Released", description: "HD display in phone" },
            { date: "Jul 1", title: "Instagram Launched", description: "Photo sharing app" },
            { date: "Dec 1", title: "Twitter Hits Peak", description: "Microblogging mainstream" }
        ],
        websites: [
            { name: "Facebook", description: "Social network", type: "social" },
            { name: "Twitter", description: "Microblogging", type: "social" },
            { name: "Instagram", description: "Photo sharing", type: "social" },
            { name: "Pinterest", description: "Content curation", type: "social" }
        ],
        technologies: ["HTML5", "CSS3", "Mobile First", "jQuery", "WebGL"],
        bandwidth: "4G LTE - Broadband",
        browsers: ["Chrome 5.0", "Safari 5.0", "Firefox 3.6"]
    },
    2015: {
        year: 2015,
        title: "Cloud & Mobile",
        description: "Cloud services dominant. Mobile-first design. Flash dying. ES6 released.",
        events: [
            { date: "Feb 1", title: "Apple vs FBI", description: "Encryption debate begins" },
            { date: "May 1", title: "ES6/ES2015 Released", description: "JavaScript modernized" },
            { date: "Jul 1", title: "HTTP/2 Standardized", description: "Web speed improved" },
            { date: "Oct 1", title: "PWA Concept Grows", description: "Progressive web apps rise" }
        ],
        websites: [
            { name: "Medium", description: "Blogging platform", type: "content" },
            { name: "Slack", description: "Team chat", type: "business" },
            { name: "Uber", description: "Ride sharing", type: "service" },
            { name: "Airbnb", description: "Home sharing", type: "service" }
        ],
        technologies: ["ES6", "React", "Angular", "Node.js", "PWA"],
        bandwidth: "LTE - Fiber",
        browsers: ["Chrome 41.0", "Firefox 35.0", "Safari 9.0"]
    },
    2020: {
        year: 2020,
        title: "Pandemic Era",
        description: "COVID-19 drives web usage. Video conferencing explodes. WebAssembly grows.",
        events: [
            { date: "Jan 1", title: "Flash End-of-Life", description: "Flash support ends" },
            { date: "Mar 1", title: "COVID-19 Pandemic", description: "Web usage surges" },
            { date: "Jun 1", title: "Chrome 83 Released", description: "Web platform advances" },
            { date: "Sep 1", title: "Vue.js 3 Released", description: "Composition API" }
        ],
        websites: [
            { name: "Zoom", description: "Video conferencing", type: "communication" },
            { name: "Discord", description: "Community chat", type: "communication" },
            { name: "Figma", description: "Design collaboration", type: "design" },
            { name: "Notion", description: "Workspace platform", type: "productivity" }
        ],
        technologies: ["WebAssembly", "Web Components", "Service Workers", "Vite", "Next.js"],
        bandwidth: "5G - Fiber Optic",
        browsers: ["Chrome 80.0", "Firefox 75.0", "Safari 13.1"]
    },
    2024: {
        year: 2024,
        title: "AI & Modern Web",
        description: "AI integration everywhere. Serverless computing. Edge computing. Real-time web.",
        events: [
            { date: "Jan 1", title: "ChatGPT Millions", description: "AI tools mainstream" },
            { date: "Mar 1", title: "GPT-4 Released", description: "Advanced AI models" },
            { date: "Jun 1", title: "Web Containers", description: "Full dev environment in browser" },
            { date: "Sep 1", title: "AI Assistants", description: "Copilot & tools everywhere" }
        ],
        websites: [
            { name: "ChatGPT", description: "AI assistant", type: "ai" },
            { name: "Vercel", description: "Web platform", type: "platform" },
            { name: "Cursor IDE", description: "AI code editor", type: "development" },
            { name: "GitHub Copilot", description: "AI pair programming", type: "development" }
        ],
        technologies: ["React 18+", "TypeScript", "AI/ML APIs", "WebGPU", "Edge Computing"],
        bandwidth: "5G - 10G Fiber",
        browsers: ["Chrome 120+", "Firefox 120+", "Safari 17+", "Edge 120+"]
    },
    2026: {
        year: 2026,
        title: "Future Web",
        description: "Advanced AR/VR on web. Quantum computing exploration. Decentralized web.",
        events: [
            { date: "Jan 1", title: "Spatial Web", description: "AR/VR becomes mainstream" },
            { date: "Mar 1", title: "Web4", description: "Decentralized internet layer" },
            { date: "Jun 1", title: "Quantum APIs", description: "Quantum computing access" },
            { date: "Sep 1", title: "Neural Interfaces", description: "Brain-computer interfaces" }
        ],
        websites: [
            { name: "Metaverse Spaces", description: "Virtual worlds", type: "immersive" },
            { name: "Web3 Apps", description: "Decentralized apps", type: "web3" },
            { name: "Quantum Lab", description: "Quantum computing", type: "science" },
            { name: "Neural Web", description: "AI-brain interfaces", type: "future" }
        ],
        technologies: ["WebXR", "Neural Networks", "Quantum APIs", "Blockchain", "Web6"],
        bandwidth: "Future Networks",
        browsers: ["Neural Browser v1.0", "Spatial Safari", "Quantum Chrome"]
    }
};