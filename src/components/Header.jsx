import React, { useRef, useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function Header() {
  const indicatorRef = useRef();
  const navRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    if (isMobile) return;
    const activeIdx = navItems.findIndex(
      (item) =>
        item.to === (location.pathname === "/" ? "/" : location.pathname)
    );
    const activeLink = navRefs.current[activeIdx];
    const navBg = activeLink?.parentElement;
    if (activeLink && navBg && indicatorRef.current) {
      const navRect = navBg.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      indicatorRef.current.style.left = linkRect.left - navRect.left + "px";
      indicatorRef.current.style.width = linkRect.width + "px";
    }
  }, [location.pathname, isMobile]);

  // Get current page title
  const currentItem = navItems.find(
    (item) => item.to === (location.pathname === "/" ? "/" : location.pathname)
  );
  const currentTitle = currentItem ? currentItem.label : "";

  if (isMobile) {
    return (
      <div className="nav-wrapper mobile-nav-wrapper">
        <nav className="nav-bg mobile-nav-bg">
          <div className="mobile-pill">
            <span className="mobile-pill-title">{currentTitle}</span>
            <button
              className="mobile-hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
          {menuOpen && (
            <div className="mobile-dropdown">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  className={
                    "mobile-dropdown-link" +
                    (item.to === location.pathname ? " active" : "")
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.to);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    );
  }

  // Desktop nav (unchanged)
  return (
    <div className="nav-wrapper">
      <nav className="nav-bg">
        <div className="nav-indicator" ref={indicatorRef}></div>
        {navItems.map((item, idx) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            ref={(el) => (navRefs.current[idx] = el)}
            end={item.to === "/"}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
} 