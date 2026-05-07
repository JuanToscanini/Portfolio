'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  return (
    <section id="contacto" className="py-16" style={{ backgroundColor: '#0A0E10' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-2 text-center animate-fade-in" style={{ color: '#CBD5E1' }}>Contacto</h2>
        <p className="mb-4 text-center animate-slide-left" style={{ color: '#CBD5E1' }}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 animate-scale-in">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#94A3B8' }}>
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
              style={{
                background: 'rgba(20, 30, 34, 0.9)',
                borderColor: '#94A3B8',
                color: '#F1F5F9'
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#94A3B8' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
              style={{
                background: 'rgba(20, 30, 34, 0.9)',
                borderColor: '#94A3B8',
                color: '#F1F5F9'
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#94A3B8' }}>
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribí tu mensaje aquí..."
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
              style={{
                background: 'rgba(20, 30, 34, 0.9)',
                borderColor: '#94A3B8',
                color: '#F1F5F9'
              }}
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <div className="text-center py-2 rounded-lg" style={{ color: '#4ADE80', background: 'rgba(74, 222, 128, 0.1)' }}>
              ¡Mensaje enviado correctamente!
            </div>
          )}
          {status === 'error' && (
            <div className="text-center py-2 rounded-lg" style={{ color: '#F87171', background: 'rgba(248, 113, 113, 0.1)' }}>
              {errorMsg || 'Error al enviar el mensaje'}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 30, 34, 0.9), rgba(30, 48, 53, 0.8))',
              border: '1px solid #94A3B8',
              color: '#F1F5F9'
            }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* Alternative contact links */}
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <a
            href="https://github.com/JuanToscanini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: '#94A3B8' }}
          >
            GitHub
          </a>
          <span style={{ color: '#4A5568' }}>|</span>
          <a
            href="https://linkedin.com/in/juan-toscanini-942115204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: '#94A3B8' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
