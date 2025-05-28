import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from "./components/mainfunctions/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GreatBritishRailways from "./pages/project-sub-pages/GreatBritishRailways";
import "./style.css";
import React from "react";
import { HelmetProvider } from 'react-helmet-async';
import PageCrossFade from './components/PageCrossFade';

const NAV_ORDER = ["/", "/projects", "/about", "/contact"];

function ProjectsSubPageWrapper(props) {
  const { subpage } = useParams();
  switch (subpage) {
    case "great-british-railways":
      return <GreatBritishRailways key="/projects/great-british-railways" {...props} />;
    default:
      return <Projects key="/projects" {...props} />;
  }
}

function AnimatedRoutes() {
  const location = useLocation();
  function getPageElement(path) {
    switch (path) {
      case "/": return <Home key="/" />;
      case "/projects": return <Projects key="/" />;
      case "/about": return <About key="/about" />;
      case "/contact": return <Contact key="/contact" />;
      default:
        if (path.startsWith("/projects/")) {
          return <ProjectsSubPageWrapper key={path} />;
        }
        return <Home key="/" />;
    }
  }
  return (
    <PageCrossFade locationKey={location.pathname}>
      {getPageElement(location.pathname)}
    </PageCrossFade>
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