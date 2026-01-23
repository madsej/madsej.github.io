import { useState } from 'react';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Experience } from '@/app/components/Experience';
import { Education } from '@/app/components/Education';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-medium text-gray-900"
            >
              Madison Sejas Siles
            </button>
            <div className="flex gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-red-900 font-medium'
                      : 'text-gray-600 hover:text-red-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© 2026 Madison Sejas Siles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
