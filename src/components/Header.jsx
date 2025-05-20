import React, { useRef, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const indicatorRef = useRef();
  const navRefs = useRef([]);
  const location = useLocation();

  useLayoutEffect(() => {
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
  }, [location.pathname]);

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