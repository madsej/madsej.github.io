import { ArrowDown } from 'lucide-react';
import headshot from '../../images/Headshot.jpeg';
interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img
            src={headshot}
            alt="Madison Sejas Siles"
            className="w-32 h-32 rounded-full mx-auto border-2 border-red-900"
          />
        </div>
        <div className="inline-block mb-4">
          <span className="text-sm px-4 py-1.5 bg-red-50 text-red-900 rounded-full border border-red-100">
            Computer Science @ UVA
          </span>
        </div>
        <h1 className="text-6xl font-medium text-gray-900 mb-6">
          Hi, I'm Madison
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          UVA Computer Science student using data, AI, and math to tackle practical problems and improve systems.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-red-900 hover:text-red-900 transition-colors"
          >
            View My Work
          </button>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-red-900 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </div>
  );
}
