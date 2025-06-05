
import React from 'react';
import { ContactForm } from './ContactForm';
import { CubageCalculator } from './CubageCalculator';
import { Phone, Mail, MapPin, Calculator } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roma-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solicite sua cotação ou tire suas dúvidas. Estamos prontos para atendê-lo!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-roma-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-roma-600 mr-3" />
                  <span className="text-gray-700">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-roma-600 mr-3" />
                  <span className="text-gray-700">contato@romaexpress.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-roma-600 mr-3" />
                  <span className="text-gray-700">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-roma-800">Calculadora de Cubagem</h3>
                <Calculator className="h-6 w-6 text-roma-600" />
              </div>
              <p className="text-gray-600 mb-4">
                Calcule o volume da sua carga para obter uma cotação mais precisa.
              </p>
              
              {!showCalculator ? (
                <button 
                  onClick={() => setShowCalculator(true)}
                  className="w-full bg-roma-600 hover:bg-roma-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Abrir Calculadora
                </button>
              ) : (
                <div>
                  <button 
                    onClick={() => setShowCalculator(false)}
                    className="mb-4 text-roma-600 hover:text-roma-700 text-sm"
                  >
                    ← Fechar Calculadora
                  </button>
                  <CubageCalculator />
                </div>
              )}
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
