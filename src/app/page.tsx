import SobreMi from '@/components/sections/SobreMi';
import Tecnologias from '@/components/sections/Tecnologias';
import Proyectos from '@/components/sections/Proyectos';
import Certificados from '@/components/sections/Certificados';
import Contacto from '@/components/sections/Contacto';

export default function Home() {
  return (
    <main>
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Certificados />
      <Contacto />
    </main>
  );
}