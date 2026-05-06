import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
   
  if (!project) notFound();
    
  return (
    <main className="py-20" style={{ backgroundColor: '#0A0E10' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          href="/#proyectos" 
          className="inline-flex items-center gap-2 mb-8 hover:underline transition-colors"
          style={{ color: '#94A3B8' }}
        >
          <ArrowLeft size={20} />
          Volver a Proyectos
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-8 mb-6" style={{ color: '#CBD5E1' }}>{project.title}</h1>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: '#1E3035', color: '#CBD5E1', border: '1px solid #94A3B8' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#CBD5E1' }}>Descripción</h2>
          <p style={{ color: '#94A3B8', lineHeight: '1.7' }}>{project.longDescription}</p>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#CBD5E1' }}>Características principales</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3" style={{ color: '#94A3B8' }}>
                  <span className="mt-1 text-lg" style={{ color: '#38BDF8' }}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#CBD5E1' }}>Galería de imágenes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border" style={{ borderColor: '#94A3B8' }}>
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              border: '1px solid #94A3B8', 
              color: '#F1F5F9' 
            }}
          >
            Demo en vivo
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              borderColor: '#94A3B8', 
              color: '#F1F5F9' 
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
