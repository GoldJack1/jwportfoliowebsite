# Jack Wingate Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing design and development projects.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Optimized with code splitting, lazy loading, and service worker
- 🔍 **SEO Optimized**: Open Graph tags, structured data, sitemap, and robots.txt
- ♿ **Accessible**: ARIA labels, keyboard navigation, and semantic HTML
- 🌐 **Offline Support**: Service worker for offline browsing
- 🎯 **Error Handling**: Error boundaries and 404 page

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite 7** - Build tool and dev server
- **Swiper** - Touch slider component
- **React Helmet Async** - SEO meta tag management
- **Bootstrap 5** - CSS framework (partial usage)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd JWPortfolioWebsite
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── mainfunctions/   # Header, Footer
│   ├── showreels/      # Image/video sliders
│   ├── buttons/        # Button components
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── NotFound.jsx
│   └── project-sub-pages/
├── style.css           # Global styles
└── main.jsx            # Entry point

public/
├── sw.js               # Service worker
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for SEO
└── _headers            # Netlify headers (caching)
```

## Features in Detail

### Performance Optimizations

- Code splitting with manual chunks
- Lazy loading for images and videos
- Debounced event listeners
- Service worker for offline support
- Optimized caching headers

### SEO Features

- Open Graph meta tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Semantic HTML

### Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Semantic HTML structure

## Deployment

This site is configured for deployment on Netlify. The `public/_headers` file provides caching configuration.

### Netlify Deployment

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The site will automatically deploy on push

## Browser Supporth


- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project - All rights reserved

## Contact

For inquiries, visit the [Contact page](https://jackwingateportfolio.netlify.app/contact) or reach out via social media links in the footer.
