export interface Certificate {
  id: string;
  imagen: string;
  titulo: string;
  categoria: string;
  archivo: string;
  institucion?: string;
  fecha?: string;
  destacado?: boolean;
  descripcion?: string[];
}

export const certificates: Certificate[] = [
  {
    id: 'tecnicatura-utn',
    imagen: '/img/tecnicatura-utn.png',
    titulo: 'Técnico Universitario en Programación',
    categoria: 'Título universitario',
    archivo: '/img/tecnicatura-utn.png',
    institucion: 'UTN FRCU',
    fecha: 'Egresado en julio de 2026',
    destacado: true,
    descripcion: [
      'Carrera de grado de la Universidad Tecnológica Nacional, Facultad Regional Concepción del Uruguay, cursada entre 2024 y 2026.',
      'Formación integral en programación, bases de datos, arquitectura de software y desarrollo full-stack, con proyectos aplicados a clientes reales como trabajo final de carrera.',
      'Actualmente el diploma se encuentra en trámite; la foto es un certificado de reconocimiento de la UTN FRCU que acredita la finalización de la carrera.'
    ]
  },
  {
    id: 'javascript',
    imagen: '/certificados/certificado-javascript.png',
    titulo: 'JavaScript',
    categoria: 'Certificado Top 10',
    archivo: '/certificados/certificado-javascript.png',
    institucion: 'Coderhouse',
    descripcion: [
      'Curso intensivo de JavaScript de 36 horas dictado por Coderhouse, con reconocimiento Top 10.',
      'Cubre fundamentos del lenguaje, manipulación del DOM, asincronismo y buenas prácticas de programación.'
    ]
  },
  {
    id: 'desarrollo-web',
    imagen: '/certificados/certificado-desarrollo-web.png',
    titulo: 'Desarrollo Web',
    categoria: 'Certificado',
    archivo: '/certificados/certificado-desarrollo-web.png',
    institucion: 'Coderhouse',
    descripcion: [
      'Curso de Desarrollo Web de 38 horas dictado por Coderhouse.',
      'Introducción a HTML, CSS y fundamentos de diseño y estructura de sitios web responsivos.'
    ]
  },
  {
    id: 'react-js',
    imagen: '/certificados/certificado-react-js.png',
    titulo: 'React JS',
    categoria: 'Certificado',
    archivo: '/certificados/certificado-react-js.png',
    institucion: 'Coderhouse',
    descripcion: [
      'Curso de React JS de 30 horas dictado por Coderhouse.',
      'Desarrollo de interfaces mediante componentes, manejo de estado y hooks, y construcción de aplicaciones SPA.'
    ]
  }
];
