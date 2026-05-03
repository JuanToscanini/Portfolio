import SobreMi from '@/components/sections/SobreMi';
import Tecnologias from '@/components/sections/Tecnologias';
import Proyectos from '@/components/sections/Proyectos';
import Certificados from '@/components/sections/Certificados';
import Contacto from '@/components/sections/Contacto';

export default function Home() {
  return (
    <main>
      <SobreMi />
      
      {/* Subtle divider: SobreMi (#0A0E10) → Tecnologias (#141E22) */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, #0A0E10, #94A3B8, #141E22)' }}></div>
      
      <Tecnologias />
      <Proyectos />
      <Certificados />
      
      {/* Subtle divider: Certificados (#141E22) → Contacto (#0A0E10) */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, #141E22, #94A3B8, #0A0E10)' }}></div>
      
      <Contacto />
    </main>
  );
}