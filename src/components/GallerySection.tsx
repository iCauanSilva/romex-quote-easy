
import React from 'react';

export const GallerySection = () => {
  // Placeholder para as fotos - você pode substituir por suas imagens reais
  const photos = [
    {
      id: 1,
      alt: 'Caminhão Roma Express',
      placeholder: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      alt: 'Frota Roma Express',
      placeholder: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      alt: 'Carregamento de mercadorias',
      placeholder: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      alt: 'Entrega Roma Express',
      placeholder: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roma-800 mb-4">
            Nossa Frota
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa frota moderna e bem equipada, pronta para atender suas necessidades de transporte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={photo.placeholder} 
                alt={photo.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
