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
window.addEventListener('resize', updateMobileClass);
updateMobileClass();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 