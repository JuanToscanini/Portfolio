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
  esPrimerProyecto?: boolean;
  nota?: string;
}

export const projects: Project[] = [
  {
    slug: 'herreria-ledesma',
    title: 'Herrería Ledesma',
    description: 'Proyecto final de la carrera (UTN FRCU). Aplicación full-stack de e-commerce para un cliente real del sector metalúrgico, con panel de administración CRUD, autenticación JWT y pagos online integrados con MercadoPago.',
    longDescription: 'Proyecto final de la carrera (UTN FRCU). Aplicación full-stack de e-commerce para un cliente real del sector metalúrgico, con panel de administración CRUD, autenticación JWT y pagos online integrados con MercadoPago.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'MercadoPago', 'bcrypt'],
    demo: 'https://p-herreria.vercel.app/',
    github: 'https://github.com/JuanToscanini/P_Herreria',
    images: ['/projects/herreria1.png', '/projects/herreria2.png', '/projects/herreria3.png'],
    features: [
      'Panel de administración con operaciones CRUD completas',
      'Autenticación de usuarios con JWT',
      'Pagos online integrados con MercadoPago',
      'Desarrollado como proyecto final para un cliente real del sector metalúrgico'
    ]
  },
  {
    slug: 'iron-step',
    title: 'Iron Step',
    description: 'E-commerce de zapatillas (TP final de Programación IV). Arquitectura API REST modular, carrito de compras, historial de pedidos y notificaciones automáticas por email, con panel de administración.',
    longDescription: 'E-commerce de zapatillas (TP final de Programación IV). Arquitectura API REST modular, carrito de compras, historial de pedidos y notificaciones automáticas por email, con panel de administración.',
    tech: ['React', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'nodemailer'],
    demo: 'https://ironstep.netlify.app',
    github: 'https://github.com/JuanToscanini/ecommerce-zapatillas',
    images: ['/projects/ironstep1.png', '/projects/ironstep2.png', '/projects/ironstep3.png'],
    features: [
      'Arquitectura de API REST modular',
      'Carrito de compras e historial de pedidos',
      'Notificaciones automáticas por email con nodemailer',
      'Panel de administración'
    ]
  },
  {
    slug: 'proyecto-Javascript',
    title: 'e-Commerce de Perfumes',
    description: 'e-Commerce de perfumes, realizado en el curso de Javascript de Coderhouse',
    longDescription: 'E-commerce completo de perfumes desarrollado durante el curso de Javascript en Coderhouse. Incluye catálogo de productos, carrito de compras, y diseño responsivo. Fue mi primer proyecto completo en Javascript, lo que me permitió aplicar los conocimientos adquiridos en el curso y mejorar mis habilidades de desarrollo web.',
    tech: ['HTML', 'CSS', 'Javascript', 'Vercel'],
    demo: 'https://proyecto-javascript-perfume.vercel.app/',
    github: 'https://github.com/JuanToscanini/ProyectoJavaScript',
    images: ['/images/perfumes.png'],
    features: [
      'Interfaz intuitiva y responsiva',
      'Sistema de autenticación seguro',
      'Panel de administración completo',
      'Integración con APIs externas'
    ],
    esPrimerProyecto: true,
    nota: 'Este fue uno de mis primeros proyectos completos. Lo mantengo en el portfolio porque marca el punto de partida de mi camino como desarrollador.'
  }
];
