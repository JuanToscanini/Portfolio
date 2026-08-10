import { notFound } from 'next/navigation';
import { certificates } from '@/data/certificates';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function FormacionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const certificate = certificates.find(c => c.id === slug);

  if (!certificate) notFound();

  return (
    <main className="py-20" style={{ backgroundColor: '#0A0E10' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/#certificados"
          className="inline-flex items-center gap-2 mb-8 hover:underline transition-colors"
          style={{ color: '#94A3B8' }}
        >
          <ArrowLeft size={20} />
          Volver a Formación
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-8 mb-6" style={{ color: '#CBD5E1' }}>{certificate.titulo}</h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {certificate.institucion && (
            <span
              className="px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: '#1E3035', color: '#CBD5E1', border: '1px solid #94A3B8' }}
            >
              {certificate.institucion}
            </span>
          )}
          <span
            className="px-3 py-1 rounded-full text-sm"
            style={
              certificate.destacado
                ? { backgroundColor: '#C9A227', color: '#141E22', fontWeight: 600 }
                : { backgroundColor: '#1E3035', color: '#CBD5E1', border: '1px solid #94A3B8' }
            }
          >
            {certificate.categoria}
          </span>
          {certificate.fecha && (
            <span
              className="px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: '#1E3035', color: '#CBD5E1', border: '1px solid #94A3B8' }}
            >
              {certificate.fecha}
            </span>
          )}
        </div>

        {/* Description */}
        {certificate.descripcion && certificate.descripcion.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#CBD5E1' }}>Descripción</h2>
            <div className="space-y-4">
              {certificate.descripcion.map((parrafo, index) => (
                <p key={index} style={{ color: '#94A3B8', lineHeight: '1.7' }}>{parrafo}</p>
              ))}
            </div>
          </div>
        )}

        {/* Certificate image */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#CBD5E1' }}>Certificado</h2>
          <img
            src={certificate.imagen}
            alt={certificate.titulo}
            className="w-full rounded-lg border"
            style={{ borderColor: '#94A3B8' }}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={certificate.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              border: '1px solid #94A3B8',
              color: '#F1F5F9'
            }}
          >
            Ver certificado original
          </a>
        </div>
      </div>
    </main>
  );
}
