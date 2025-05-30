import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from "./components/mainfunctions/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GreatBritishRailways from "./pages/project-sub-pages/GreatBritishRailways";
import ProjectTemplate from "./pages/project-sub-pages/ProjectTemplate";
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
    case "porji-temp":
      return <ProjectTemplate key="/projects/porji-temp" {...props} />;
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

// Temporary redirect component for /project/lack-of-realism
function LackOfRealismRedirect() {
  React.useEffect(() => {
    window.location.href = 'https://www.figma.com/proto/aR39WdBA0rPhfAlbWy1j70/Special-Study?page-id=219%3A13456&node-id=226-17236&p=f&viewport=118%2C697%2C0.02&t=TCfqKaDNyZr24Xmz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=226%3A17236&show-proto-sidebar=1';
  }, []);
  return null;
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
          {/* Temporary redirect route for /project/lack-of-realism */}
          <Route path="/project/lack-of-realism" element={<LackOfRealismRedirect />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App; 