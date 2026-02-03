import React from 'react';
import Navbar from './components/layout/Navbar';
import FloatingWidget from './components/layout/FloatingWidget';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Consulting from './components/sections/Consulting';
import Portfolio from './components/sections/Portfolio';
import Partners from './components/sections/Partners';
import Venue from './components/sections/Venue';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-bg min-h-screen text-white font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Consulting />
      <Portfolio />
      <Partners />
      <Venue />
      <Contact />
      <FloatingWidget />

      {/* Footer - Replaced with the new requirement */}
      <footer className="py-12 border-t border-white/10 bg-[#020202] text-xs md:text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-4 border-b border-gray-800 pb-4 md:border-none md:pb-0">
              <span>Business License. 625-61-00547</span>
              <span>Address: 10-4, Baebang-ro 187beon-gil, Baebang-eup, Asan-si, Chungcheongnam-do, Republic of Korea</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span>CS: 0507-1358-5024 (AM9-PM8)</span>
              <span>E: pdlauncher@naver.com</span>
              <span>Hosting By. PRODUCTION LAUNCHER</span>
              <span>CEO: Jo Dae Hyeon</span>
            </div>
          </div>
          <div className="text-right w-full md:w-auto">
            <p className="font-bold text-gray-400">It will be a "Launcher" that realizes corporate value.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
