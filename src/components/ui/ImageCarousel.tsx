'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full">
      <div
        className="relative rounded-lg overflow-hidden border"
        style={{ borderColor: '#94A3B8' }}
      >
        <img
          src={images[current]}
          alt={`${alt} screenshot ${current + 1}`}
          className="w-full h-auto"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(10, 14, 16, 0.6)',
                border: '1px solid #94A3B8',
                color: '#F1F5F9',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(10, 14, 16, 0.6)',
                border: '1px solid #94A3B8',
                color: '#F1F5F9',
              }}
            >
              <ChevronRight size={20} />
            </button>

            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
              style={{ background: 'rgba(10, 14, 16, 0.6)', color: '#CBD5E1' }}
            >
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir a imagen ${index + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === current ? '20px' : '8px',
                height: '8px',
                backgroundColor: index === current ? '#38BDF8' : '#94A3B8',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
