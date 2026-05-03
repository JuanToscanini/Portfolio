import { Mail } from 'lucide-react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-32" style={{ backgroundColor: '#0A0E10' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in" style={{ color: '#CBD5E1' }}>Contacto</h2>
        <p className="mb-8 animate-slide-left" style={{ color: '#CBD5E1' }}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ 
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              border: '1px solid #94A3B8', 
              color: '#F1F5F9' 
            }}
          >
            <Mail size={20} />
            Email
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/JuanToscanini"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ 
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              borderColor: '#94A3B8', 
              color: '#F1F5F9', 
              animationDelay: '0.1s' 
            }}
          >
            GitHub
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/juan-toscanini-942115204"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ 
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              borderColor: '#94A3B8', 
              color: '#F1F5F9', 
              animationDelay: '0.2s' 
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
