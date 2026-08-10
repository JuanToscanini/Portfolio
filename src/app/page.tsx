import SobreMi from '@/components/sections/SobreMi';
import Tecnologias from '@/components/sections/Tecnologias';
import Proyectos from '@/components/sections/Proyectos';
import Certificados from '@/components/sections/Certificados';

export default function Home() {
  return (
    <main>
      <SobreMi />

      {/* Subtle divider: SobreMi (#0A0E10) → Tecnologias/Certificados (#141E22) */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, #0A0E10, #94A3B8, #141E22)' }}></div>

      <Tecnologias />
      <Certificados />

      {/* Proyectos, full width, with Contacto nested inside as a card */}
      <Proyectos />
    </main>
  );
}