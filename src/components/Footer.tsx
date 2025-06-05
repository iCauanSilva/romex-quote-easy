
import React from 'react';
import { Truck, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-roma-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 mr-3" />
              <h3 className="text-xl font-bold">Roma Express</h3>
            </div>
            <p className="text-gray-300">
              Soluções em transporte e logística com segurança e eficiência.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">contato@romaexpress.com.br</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Transporte de Cargas</li>
              <li>Logística</li>
              <li>Rastreamento</li>
              <li>Consultoria</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-roma-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Roma Express. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
