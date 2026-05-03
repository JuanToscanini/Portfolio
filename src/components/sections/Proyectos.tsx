export default function Proyectos() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve de tu proyecto.',
      tech: ['React', 'Next.js', 'Tailwind'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Proyecto 2',
      description: 'Otro proyecto destacado.',
      tech: ['Node.js', 'TypeScript'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="proyectos" className="py-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="border rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                  borderColor: '#94A3B8',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#CBD5E1' }}>{project.title}</h3>
              <p className="mb-4" style={{ color: '#CBD5E1' }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#1E3035', color: '#CBD5E1' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.demo} className="transition-colors hover:underline" style={{ color: '#CBD5E1' }}>Demo</a>
                <a href={project.github} className="transition-colors hover:underline" style={{ color: '#CBD5E1' }}>GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
