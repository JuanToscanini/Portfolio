'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const navItems = [
  { name: 'Sobre mi', href: '#sobremi' },
 { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">[TUS INICIALES]</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 pb-3 px-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}