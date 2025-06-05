
import React from 'react';
import { Award, Clock, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-roma-800 mb-6">
              Sobre a Roma Express
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Há mais de uma década no mercado de transporte e logística, a Roma Express 
              se destaca pela qualidade dos serviços prestados e pelo compromisso com a 
              satisfação de nossos clientes.
            </p>
            <p className="text-gray-600 mb-8">
              Nossa missão é oferecer soluções em transporte que combinam segurança, 
              eficiência e pontualidade, sempre com o melhor custo-benefício do mercado.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-roma-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-roma-600" />
                </div>
                <div className="text-2xl font-bold text-roma-800">10+</div>
                <div className="text-gray-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="bg-roma-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-roma-600" />
                </div>
                <div className="text-2xl font-bold text-roma-800">1000+</div>
                <div className="text-gray-600">Clientes satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="bg-roma-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-roma-600" />
                </div>
                <div className="text-2xl font-bold text-roma-800">24/7</div>
                <div className="text-gray-600">Atendimento</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Roma Express"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
