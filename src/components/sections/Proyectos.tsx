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
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.demo} className="text-blue-400 hover:text-blue-300">Demo</a>
                <a href={project.github} className="text-blue-400 hover:text-blue-300">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
