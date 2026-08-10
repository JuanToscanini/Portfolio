import { Certificate, certificates } from '@/data/certificates';

function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
  return (
    <a
      href={`/formacion/${cert.id}`}
      className="group block border rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
        borderColor: '#94A3B8',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="w-full overflow-hidden">
        <img
          src={cert.imagen}
          alt={cert.titulo}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-2" style={{ color: '#CBD5E1' }}>{cert.titulo}</h3>
        {cert.institucion && (
          <p className="text-sm mb-1" style={{ color: '#94A3B8' }}>{cert.institucion}</p>
        )}
        {cert.fecha && (
          <p className="text-xs mb-2" style={{ color: '#94A3B8' }}>{cert.fecha}</p>
        )}
        <span
          className="inline-block px-3 py-1 rounded-full text-xs mb-4"
          style={
            cert.destacado
              ? { backgroundColor: '#C9A227', color: '#141E22', fontWeight: 600 }
              : { backgroundColor: '#1E3035', color: '#CBD5E1' }
          }
        >
          {cert.categoria}
        </span>
        <div>
          <span className="text-sm hover:underline" style={{ color: '#CBD5E1' }}>
            Más Información 
          </span>
        </div>
      </div>
    </a>
  );
}

function CertificateRow({ cert, isLast }: { cert: Certificate; isLast: boolean }) {
  return (
    <div>
      <a
        href={`/formacion/${cert.id}`}
        className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-[#1E3035] hover:border-[#CBD5E1]"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
          borderColor: '#94A3B8'
        }}
      >
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={cert.imagen}
            alt={cert.titulo}
            className="w-28 h-20 object-cover rounded-md flex-shrink-0"
          />
          <div className="min-w-0">
            <h4 className="text-base font-semibold truncate" style={{ color: '#CBD5E1' }}>{cert.titulo}</h4>
          </div>
        </div>
        <span
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex-shrink-0 border"
          style={{ color: '#CBD5E1', borderColor: '#94A3B8' }}
        >
          Más información →
        </span>
      </a>
      {!isLast && (
        <div className="h-4 border-l border-dashed" style={{ marginLeft: '60px', borderColor: '#94A3B8' }} />
      )}
    </div>
  );
}

export default function Certificados() {
  const titulosUniversitarios = certificates.filter((cert) => cert.destacado);
  const cursos = certificates.filter((cert) => !cert.destacado);

  return (
    <section id="certificados" className="py-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Formación y Certificaciones</h2>
        <div className="grid lg:grid-cols-[2fr_2px_3fr] gap-8 items-start">
          <div className="lg:max-w-sm">
            <h3 className="text-xl font-semibold mb-6" style={{ color: '#C9A227' }}>Título Universitario</h3>
            <div className="grid gap-6">
              {titulosUniversitarios.map((cert, index) => (
                <CertificateCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block h-full" style={{ backgroundColor: '#1E3035' }} />

          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ color: '#CBD5E1' }}>Cursos y Certificaciones</h3>
            <div className="flex flex-col max-w-xl">
              {cursos.map((cert, index) => (
                <CertificateRow key={cert.id} cert={cert} isLast={index === cursos.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
