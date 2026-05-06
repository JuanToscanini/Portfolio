export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  demo: string;
  github: string;
  images?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: 'proyecto-Javascript',
    title: 'e-Commerce de Perfumes',
    description: 'e-Commerce de perfumes, realizado en el curso de Javascript de Coderhouse',
    longDescription: 'E-commerce completo de perfumes desarrollado durante el curso de Javascript en Coderhouse. Incluye catálogo de productos, carrito de compras, y diseño responsivo.',
    tech: ['HTML', 'CSS', 'Javascript', 'Vercel'],
    demo: 'https://proyecto-javascript-perfume.vercel.app/',
    github: 'https://github.com/JuanToscanini/ProyectoJavaScript',
    images: ['/images/perfumes.png', '/projects/placeholder-2.png', '/projects/placeholder-3.png'],
    features: [
      'Interfaz intuitiva y responsiva',
      'Sistema de autenticación seguro',
      'Panel de administración completo',
      'Integración con APIs externas'
    ]
  },
  {
    slug: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Otro proyecto destacado.',
    longDescription: 'Descripción detallada del segundo proyecto. Menciona las tecnologías específicas que usaste y por qué las elegiste.',
    tech: ['Node.js', 'TypeScript', 'MongoDB'],
    demo: '#',
    github: '#',
    images: ['/projects/placeholder-3.png'],
    features: [
      'Arquitectura de microservicios',
      'Base de datos NoSQL optimizada',
      'Documentación API completa con Swagger',
      'Pruebas automatizadas con Jest'
    ]
  }
];
