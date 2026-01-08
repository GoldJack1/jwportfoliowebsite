import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Add force-mobile class to <body> if window is mobile-sized in either dimension
function updateMobileClass() {
  if (window.innerWidth <= 600 || window.innerHeight <= 600) {
    document.body.classList.add('force-mobile');
  } else {
    document.body.classList.remove('force-mobile');
  }
}

// Debounce resize handler for better performance
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateMobileClass, 150);
}

window.addEventListener('resize', handleResize, { passive: true });
updateMobileClass();

// Add scrolled class when user scrolls down
let scrollTimeout;
function handleScroll() {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled');
    document.documentElement.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
    document.documentElement.classList.remove('scrolled');
  }
}

// Debounced scroll handler
function debouncedScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(handleScroll, 10);
}

window.addEventListener('scroll', debouncedScroll, { passive: true });
handleScroll(); // Check initial scroll position

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('[Service Worker] Registered successfully:', registration.scope);
        
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available, prompt user to refresh
                console.log('[Service Worker] New version available');
                // Optionally show a notification to the user
                if (confirm('A new version of the site is available. Reload to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log('[Service Worker] Registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 