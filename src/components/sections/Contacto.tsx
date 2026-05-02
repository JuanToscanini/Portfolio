import { Mail } from 'lucide-react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">Contacto</h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto animate-slide-left">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover-lift animate-scale-in"
          >
            <Mail size={20} />
            Email
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/JuanToscanini"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-700 transition-all duration-300 hover-lift animate-scale-in"
            style={{ animationDelay: '0.1s' }}
          >
            GitHub
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/juan-toscanini-942115204"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-700 transition-all duration-300 hover-lift animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
