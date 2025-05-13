
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { CubageCalculator } from './CubageCalculator';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCalculatorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCalculator(true);
    setIsMenuOpen(false); // Fechar o menu ao abrir a calculadora
  };

  const closeCalculator = () => {
    setShowCalculator(false);
  };

  return (
    <div className="relative">
      <header className="bg-roma-500 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Roma Express</div>
        <button 
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-fade-down">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="block p-2 hover:bg-gray-100 rounded-md text-roma-800"
                  onClick={handleCalculatorClick}
                >
                  Calculadora de Cubagem
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-100 rounded-md text-roma-800">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Cubage Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-roma-800">Calculadora de Cubagem</h2>
              <button 
                onClick={closeCalculator} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <CubageCalculator />
          </div>
        </div>
      )}
    </div>
  );
};
