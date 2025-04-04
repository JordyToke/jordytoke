import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO.jsx";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Utilities from "./pages/Utilities.jsx";
import Projects from "./pages/Projects.jsx";
import WD13 from "./pages/WD13.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NoPage from "./pages/NoPage.jsx";


const helmetContext = {};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
        <SEO title="Jordys Webfolio" description="Jordy Toke's Portfolio Website" locale="en_AU" author="Jordy Toke" />
    </HelmetProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Projects" element={<Projects />}>
          <Route path="WD13" element={<WD13 />} />
        </Route>
        <Route path="Utilities" element={<Utilities />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
