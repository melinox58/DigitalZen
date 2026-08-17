import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import { CookieProvider } from './context/CookieContext';

import Home from './pages/Home';
import Services from './pages/Services';
import Parcours from './pages/Parcours';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Article from './pages/Article';
import MentionsLegales from './pages/MentionsLegales';
import CGV from './pages/CGV';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <CookieProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container ivory-texture min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/article" element={<Article />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <MobileNav />
          <CookieBanner />
        </div>
      </Router>
    </CookieProvider>
  );
}
