'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function SobreMi() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 35;
    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
      }
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += dx * 0.0003;
          p.vy += dy * 0.0003;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.25 * (1 - dist2 / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="sobremi" className="py-32 relative" style={{ backgroundColor: '#0A0E10' }}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Text */}
          <div className="space-y-4 p-6" style={{ color: '#CBD5E1' }}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#CBD5E1' }}>Sobre Mi</h2>
            <p>
              Técnico Universitario en Programación, egresado de la UTN FRCU en julio de 2026. Me especializo en desarrollo full-stack con React y Node.js, con experiencia práctica en proyectos reales, aplicando tecnologías modernas y metodologías colaborativas.
            </p>
            <p>
              Actualmente en búsqueda de mi primera oportunidad laboral como desarrollador full-stack, con muchas ganas de sumarme a un equipo y seguir creciendo en proyectos productivos.
            </p>
          </div>
          
          {/* Right side - empty for particles */}
          <div className="p-6 min-h-[350px]"></div>
        </div>
      </div>
    </section>
  );
}
