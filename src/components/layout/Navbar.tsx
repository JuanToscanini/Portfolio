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
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b" style={{ backgroundColor: 'rgba(10, 14, 16, 0.6)', borderColor: '#94A3B8' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-lg sm:text-xl" style={{ color: '#CBD5E1' }}>JT</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 sm:ml-10 flex items-baseline space-x-2 sm:space-x-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors hover:underline" style={{ color: '#CBD5E1' }}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: '#94A3B8' }} className="focus:outline-none p-1">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden pb-3 px-2 sm:px-4" style={{ backgroundColor: '#0A0E10' }}>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:underline" style={{ color: '#94A3B8' }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}