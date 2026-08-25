import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PitchDeck from "./pages/case-studies/PitchDeck";
import DataStorytelling from "./pages/case-studies/DataStorytelling";
import ExecutiveOnePager from "./pages/case-studies/ExecutiveOnePager";
import Strategy from "./pages/case-studies/Strategy";
import Redesign from "./pages/case-studies/Redesign";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/pitch-deck" element={<PitchDeck />} />
          <Route path="/work/data-storytelling" element={<DataStorytelling />} />
          <Route path="/work/executive-one-pager" element={<ExecutiveOnePager />} />
          <Route path="/work/strategy" element={<Strategy />} />
          <Route path="/work/redesign" element={<Redesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
