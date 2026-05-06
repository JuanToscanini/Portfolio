import { projects } from '@/data/projects';

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <a 
                key={project.slug} 
                href={`/proyectos/${project.slug}`}
                className="block border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                  borderColor: '#94A3B8',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {project.images?.[0] && (
                  <div className="w-full">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
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
                  <span className="transition-colors hover:underline" style={{ color: '#CBD5E1' }}>Ver más →</span>
                </div>
                </div>
              </a>
            ))}
          </div>
      </div>
    </section>
  );
}
