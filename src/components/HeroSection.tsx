
import React from 'react';
import { Truck, MapPin, Clock } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-roma-600 to-roma-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Roma Express
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Soluções em transporte e logística com segurança e eficiência
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transporte Seguro</h3>
              <p className="text-center">Frota moderna e equipada para suas necessidades</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cobertura Nacional</h3>
              <p className="text-center">Atendemos todo o território brasileiro</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-center">Prazos confiáveis e rastreamento completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
