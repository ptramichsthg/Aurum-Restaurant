import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import MenuHighlights from './components/MenuHighlights';
import Ambiance from './components/Ambiance';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Ensure we keep default styles if any, or remove if unused

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <Navbar />
        <Hero />
        <Philosophy />
        <MenuHighlights />
        <Ambiance />
        <Reservation />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
