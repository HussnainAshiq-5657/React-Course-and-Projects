import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import About from './pages/About';
import Scroll from './pages/Scroll';
import ScrollHero from './pages/Stagger';
import Timer from './pages/Timer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/hero" element={<ScrollHero />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
