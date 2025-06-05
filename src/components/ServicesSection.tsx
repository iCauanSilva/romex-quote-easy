
import React from 'react';
import { Package, Shield, TrendingUp, Users } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Transporte de Cargas',
      description: 'Transporte seguro e eficiente para todos os tipos de mercadorias'
    },
    {
      icon: Shield,
      title: 'Seguro Total',
      description: 'Cobertura completa para sua mercadoria durante todo o trajeto'
    },
    {
      icon: TrendingUp,
      title: 'Rastreamento',
      description: 'Acompanhe sua carga em tempo real através do nosso sistema'
    },
    {
      icon: Users,
      title: 'Atendimento 24h',
      description: 'Suporte completo disponível 24 horas por dia, 7 dias por semana'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roma-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em logística e transporte para atender todas as suas necessidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-roma-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-roma-600" />
                </div>
                <h3 className="text-xl font-semibold text-roma-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
