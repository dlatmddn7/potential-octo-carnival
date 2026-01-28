import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Venue from './components/sections/Venue';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Venue />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 BEZERO STUDIO. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
