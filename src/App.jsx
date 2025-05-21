import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style.css";
import React, { useRef, useState, useEffect } from "react";
import PageSlider from "./components/PageSlider";

const NAV_ORDER = ["/", "/work", "/about", "/contact"];

function AnimatedRoutes() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [pages, setPages] = useState([{ key: location.pathname, element: getPageElement(location.pathname) }]);
  const [direction, setDirection] = useState(-1);

  function getPageElement(path) {
    switch (path) {
      case "/": return <Home key="/" />;
      case "/work": return <Work key="/work" />;
      case "/about": return <About key="/about" />;
      case "/contact": return <Contact key="/contact" />;
      default: return <Home key="/" />;
    }
  }

  useEffect(() => {
    const prevIdx = NAV_ORDER.indexOf(prevPathRef.current);
    const currIdx = NAV_ORDER.indexOf(location.pathname);
    setDirection(currIdx > prevIdx ? -1 : 1);
    setPages([
      { key: prevPathRef.current, element: getPageElement(prevPathRef.current) },
      { key: location.pathname, element: getPageElement(location.pathname) }
    ]);
    prevPathRef.current = location.pathname;
    // Remove the previous page after animation
    const timeout = setTimeout(() => {
      setPages([{ key: location.pathname, element: getPageElement(location.pathname) }]);
    }, 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    console.log('Pages array for transition:', pages);
  }, [pages]);

  return (
    <PageSlider direction={direction}>
      {pages.map((p) => p.element)}
    </PageSlider>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App; 