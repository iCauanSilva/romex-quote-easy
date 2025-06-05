
import { useState } from 'react';

interface CompanyData {
  razao_social: string;
  nome_fantasia?: string;
}

export const useCnpjLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatCnpj = (cnpj: string) => {
    // Remove todos os caracteres não numéricos
    return cnpj.replace(/\D/g, '');
  };

  const lookupCompany = async (cnpj: string): Promise<string | null> => {
    if (!cnpj || cnpj.length < 14) return null;

    const formattedCnpj = formatCnpj(cnpj);
    
    if (formattedCnpj.length !== 14) {
      setError('CNPJ deve ter 14 dígitos');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${formattedCnpj}`);
      
      if (!response.ok) {
        throw new Error('CNPJ não encontrado');
      }

      const data: CompanyData = await response.json();
      return data.nome_fantasia || data.razao_social;
    } catch (err) {
      setError('Erro ao buscar dados da empresa');
      console.error('Erro na busca do CNPJ:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    lookupCompany,
    isLoading,
    error,
  };
};
