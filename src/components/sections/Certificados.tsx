import { certificates } from '@/data/certificates';

export default function Certificados() {
  return (
    <section id="certificados" className="py-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Certificados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a 
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                borderColor: '#94A3B8',
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#CBD5E1' }}>{cert.title}</h3>
                <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>{cert.date}</p>
                <span className="text-sm hover:underline" style={{ color: '#CBD5E1' }}>Ver certificado →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
