markdown
# Mi Portfolio Personal

Portfolio personal desarrollado con Next.js, donde muestro mi perfil como desarrollador full-stack, mi formación, certificaciones y los proyectos en los que trabajé.

## Demo

[portfolio-sigma-livid-93.vercel.app](https://juantoscanini.vercel.app/)

## Tecnologías utilizadas

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Envío de emails**: Resend (formulario de contacto)

## Secciones

- **Sobre mí**: presentación y perfil profesional
- **Tecnologías**: stack técnico organizado por categorías
- **Formación y Certificaciones**: título universitario y cursos realizados
- **Proyectos**: trabajos desarrollados, con descripción, stack y links a demo/repo
- **Contacto**: formulario para escribirme directamente

## Cómo correrlo en local

1. Cloná el repositorio:
```bash
git clone https://github.com/JuanToscanini/Portfolio.git
cd Portfolio
```

2. Instalá las dependencias:
```bash
npm install
```

3. Copiá el archivo de variables de entorno y completá tu API key de Resend:
```bash
cp .env.example .env.local
```

4. Iniciá el servidor de desarrollo:
```bash
npm run dev
```

5. Abrí [http://localhost:3000](http://localhost:3000) en el navegador.
