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
    <section id="certificados" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">Certificados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <div 
              key={cert.name} 
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
