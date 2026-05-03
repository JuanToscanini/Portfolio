'use client';

import { useEffect } from 'react';

export default function SobreMi() {
  useEffect(() => {
    const P = {
      bg: '#0A0E10',
      primary: '#94A3B8',
      secondary: '#94A3B8',
      accent: '#94A3B8',
      text: '#F1F5F9',
      edge: '#94A3B8'
    };

    function createLine(x1: number, y1: number, x2: number, y2: number, col: string, w: number, delay: number, dur: number) {
      const len = Math.hypot(x2 - x1, y2 - y1);
      return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' +
        'stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round" ' +
        'stroke-dasharray="' + len + '" style="--len:' + len + '; animation: drawEdge ' + dur + 's ease-out forwards ' + delay + 's"/>';
    }

    function createCircle(cx: number, cy: number, r: number, fill: string, col: string, delay: number, w: number = 1.2, extra: string = '') {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '" stroke="' + col + '" stroke-width="' + w + '" ' +
        'opacity="0" transform-origin="' + cx + 'px ' + cy + 'px" ' +
        'style="animation: nodeIn .4s cubic-bezier(.34,1.56,.64,1) forwards ' + delay + 's' + (extra ? ';' + extra : '') + '"/>';
    }

    const cx = 175, cy = 175;
    const orbits = [
      { r: 60, n: 4, col: P.primary, sz: 9, dur: 24 },
      { r: 110, n: 6, col: P.secondary, sz: 7, dur: 40 }
    ];

    let out = '';

    orbits.forEach(({ r, col }, i) => {
      out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="0.4" stroke-dasharray="3 6" opacity="0" style="animation: fadeIn .5s ease forwards ' + (0.5 + i * 0.4) + 's"/>';
    });

    out += '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="none" stroke="' + P.accent + '" stroke-width="1" opacity="0" style="animation: ripple 6s ease-out infinite 4s"/>';
    out += '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="none" stroke="' + P.accent + '" stroke-width="1" opacity="0" style="animation: ripple 6s ease-out infinite 6s"/>';

    orbits.forEach(({ r, n, col, sz, dur }, oi) => {
      const dir = oi % 2 === 0 ? 'orbitCW' : 'orbitCCW';
      out += '<g style="transform-origin: ' + cx + 'px ' + cy + 'px; animation: ' + dir + ' ' + dur + 's linear infinite 2s">';
      for (let i = 0; i < n; i++) {
        const a = (i / n) * 2 * Math.PI;
        const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        out += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + sz + '" ' +
          'fill="' + P.bg + '" stroke="' + col + '" stroke-width="1" opacity="0" ' +
          'transform-origin="' + x.toFixed(1) + 'px ' + y.toFixed(1) + 'px" ' +
          'style="animation: nodeIn .4s cubic-bezier(.34,1.56,.64,1) forwards ' + (1 + oi * 0.4 + i * 0.1) + 's"/>';
      }
      out += '</g>';

      for (let i = 0; i < n; i++) {
        const a = (i / n) * 2 * Math.PI;
        const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        out += createLine(cx, cy, x, y, P.edge, 0.4, 1.2 + oi * 0.3 + i * 0.08, 0.3);
      }
    });

    out += createCircle(cx, cy, 20, P.bg, P.accent, 0.1, 1.5, 'animation: nodeIn .4s cubic-bezier(.34,1.56,.64,1) forwards .1s, breathe 5s ease-in-out infinite 4s');

    const svg = '<svg width="350" height="350" viewBox="0 0 350 350">' + out + '</svg>';
    const container = document.getElementById('radial-orbit-svg');
    if (container) {
      container.innerHTML = svg;
    }
  }, []);

  return (
    <section id="sobremi" className="py-32" style={{ backgroundColor: '#0A0E10' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Text */}
          <div className="space-y-4 p-6" style={{ color: '#CBD5E1' }}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#CBD5E1' }}>Sobre Mi</h2>
            <p>
              Estudiante de Programación en la UTN FRCU enfocado en el desarrollo Fullstack. 
              <br /><br />
              Me apasiona resolver problemas complejos mediante un enfoque analítico en cada línea de código!
              <br /><br />
              Soy un firme entusiasta del aprendizaje continuo y disfruto el desafío de explorar nuevas tecnologías y lenguajes para expandir mis horizontes técnicos y adaptarme a soluciones innovadoras.
            </p>
          </div>
          
          {/* Right side - Orbital Animation */}
          <div className="flex justify-center p-6">
            <div id="radial-orbit-svg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
