
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface Package {
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
}

export const CubageCalculator = () => {
  const [packages, setPackages] = useState<Package[]>([
    { length: 0, width: 0, height: 0, weight: 0, quantity: 1 }
  ]);
  const [result, setResult] = useState({
    totalVolume: 0,
    totalWeight: 0,
    cubicWeight: 0,
    chargeableWeight: 0
  });

  const handlePackageChange = (index: number, field: keyof Package, value: number) => {
    const updatedPackages = [...packages];
    updatedPackages[index] = {
      ...updatedPackages[index],
      [field]: value
    };
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([...packages, { length: 0, width: 0, height: 0, weight: 0, quantity: 1 }]);
  };

  const removePackage = (index: number) => {
    if (packages.length > 1) {
      setPackages(packages.filter((_, i) => i !== index));
    }
  };

  const calculate = () => {
    let totalVolume = 0;
    let totalWeight = 0;

    packages.forEach(pkg => {
      // Calculate volume in cubic meters (convert from cm to m)
      const packageVolume = (pkg.length * pkg.width * pkg.height / 1000000) * pkg.quantity;
      totalVolume += packageVolume;
      
      // Calculate total weight in kg
      totalWeight += pkg.weight * pkg.quantity;
    });

    // Cubic weight calculation (1 cubic meter = 300kg as standard)
    const cubicWeight = totalVolume * 300;
    
    // Chargeable weight is the greater of actual weight or cubic weight
    const chargeableWeight = Math.max(totalWeight, cubicWeight);

    setResult({
      totalVolume,
      totalWeight,
      cubicWeight,
      chargeableWeight
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        Preencha as dimensões e peso de cada volume para calcular o peso cubado da sua carga.
      </p>
      
      {packages.map((pkg, index) => (
        <div key={index} className="p-4 border rounded-md space-y-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Volume {index + 1}</h3>
            {packages.length > 1 && (
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => removePackage(index)}
                className="h-8 px-2"
              >
                Remover
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`length-${index}`}>Comprimento (cm)</Label>
              <Input
                id={`length-${index}`}
                type="number"
                min="0"
                value={pkg.length || ''}
                onChange={(e) => handlePackageChange(index, 'length', parseFloat(e.target.value) || 0)}
                placeholder="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`width-${index}`}>Largura (cm)</Label>
              <Input
                id={`width-${index}`}
                type="number"
                min="0"
                value={pkg.width || ''}
                onChange={(e) => handlePackageChange(index, 'width', parseFloat(e.target.value) || 0)}
                placeholder="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`height-${index}`}>Altura (cm)</Label>
              <Input
                id={`height-${index}`}
                type="number"
                min="0"
                value={pkg.height || ''}
                onChange={(e) => handlePackageChange(index, 'height', parseFloat(e.target.value) || 0)}
                placeholder="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`weight-${index}`}>Peso (kg)</Label>
              <Input
                id={`weight-${index}`}
                type="number"
                min="0"
                value={pkg.weight || ''}
                onChange={(e) => handlePackageChange(index, 'weight', parseFloat(e.target.value) || 0)}
                placeholder="kg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`quantity-${index}`}>Quantidade</Label>
              <Input
                id={`quantity-${index}`}
                type="number"
                min="1"
                value={pkg.quantity}
                onChange={(e) => handlePackageChange(index, 'quantity', parseInt(e.target.value) || 1)}
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button onClick={addPackage} variant="outline" className="w-full">
        Adicionar Volume
      </Button>
      
      <Button onClick={calculate} className="w-full bg-roma-500 hover:bg-roma-600">
        Calcular
      </Button>
      
      {(result.chargeableWeight > 0) && (
        <div className="mt-6 p-4 border rounded-md bg-roma-50">
          <h3 className="font-bold text-roma-800 mb-4">Resultado</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Volume Total:</span>
              <span>{result.totalVolume.toFixed(3)} m³</span>
            </div>
            
            <div className="flex justify-between">
              <span>Peso Total:</span>
              <span>{result.totalWeight.toFixed(2)} kg</span>
            </div>
            
            <div className="flex justify-between">
              <span>Peso Cubado:</span>
              <span>{result.cubicWeight.toFixed(2)} kg</span>
            </div>
            
            <div className="flex justify-between font-bold">
              <span>Peso Taxável:</span>
              <span>{result.chargeableWeight.toFixed(2)} kg</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
