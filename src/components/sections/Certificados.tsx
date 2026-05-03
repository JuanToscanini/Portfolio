export default function Certificados() {
  const certs = [
    {
      name: 'Certificado 1',
      issuer: 'Plataforma',
      year: '2025'
    },
    {
      name: 'Certificado 2',
      issuer: 'Plataforma',
      year: '2024'
    }
  ];

  return (
    <section id="certificados" className="py-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Certificados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
              <div 
                key={cert.name} 
                className="border rounded-lg p-6 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                  borderColor: '#94A3B8',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#CBD5E1' }}>{cert.name}</h3>
              <p style={{ color: '#CBD5E1' }}>{cert.issuer}</p>
              <p className="text-sm" style={{ color: '#CBD5E1' }}>{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
