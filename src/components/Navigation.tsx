import { Film, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Work', 'Skills', 'About', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MEF!X</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50">
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
