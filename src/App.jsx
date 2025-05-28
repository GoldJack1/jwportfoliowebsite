import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from "./components/mainfunctions/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GreatBritishRailways from "./pages/project-sub-pages/GreatBritishRailways";
import "./style.css";
import React, { useRef, useState, useEffect } from "react";
import PageSlider from "./components/showreels/projectshowreel/PageSlider";
import { HelmetProvider } from 'react-helmet-async';

const NAV_ORDER = ["/", "/projects", "/about", "/contact"];

function ProjectsSubPageWrapper() {
  const { subpage } = useParams();
  switch (subpage) {
    case "great-british-railways":
      return <GreatBritishRailways key="/projects/great-british-railways" />;
    default:
      return <Projects key="/projects" />;
  }
}

function AnimatedRoutes() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [pages, setPages] = useState([{ key: location.pathname, element: getPageElement(location.pathname) }]);
  const [direction, setDirection] = useState(-1);

  function getPageElement(path) {
    switch (path) {
      case "/": return <Home key="/" />;
      case "/projects": return <Projects key="/projects" />;
      case "/about": return <About key="/about" />;
      case "/contact": return <Contact key="/contact" />;
      default:
        if (path.startsWith("/projects/")) {
          const subpage = path.replace("/projects/", "");
          return <ProjectsSubPageWrapper key={path} />;
        }
        return <Home key="/" />;
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
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AnimatedRoutes />} />
          <Route path="/projects" element={<AnimatedRoutes />} />
          <Route path="/about" element={<AnimatedRoutes />} />
          <Route path="/contact" element={<AnimatedRoutes />} />
          <Route path="/projects/:subpage" element={<AnimatedRoutes />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App; 