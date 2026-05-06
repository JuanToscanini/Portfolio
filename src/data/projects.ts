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
    slug: 'proyecto-1',
    title: 'Proyecto 1',
    description: 'Descripción breve de tu proyecto.',
    longDescription: 'Aquí puedes escribir una descripción mucho más detallada de tu proyecto. Explica el problema que resuelve, las decisiones técnicas que tomaste, y cómo tu solución beneficia a los usuarios.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: '#',
    github: '#',
    images: ['/projects/placeholder-1.png', '/projects/placeholder-2.png', '/projects/placeholder-3.png'],
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
