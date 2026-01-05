import React, { useState } from 'react';
import { Search, Package, Truck, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
}

interface TrackingResult {
  code: string;
  status: 'em_transito' | 'entregue' | 'pendente' | 'problema';
  origin: string;
  destination: string;
  estimatedDelivery: string;
  events: TrackingEvent[];
}

const mockTrackingData: Record<string, TrackingResult> = {
  'ROMA123456': {
    code: 'ROMA123456',
    status: 'em_transito',
    origin: 'São Paulo, SP',
    destination: 'Rio de Janeiro, RJ',
    estimatedDelivery: '10/01/2026',
    events: [
      {
        date: '08/01/2026',
        time: '14:30',
        location: 'Centro de Distribuição - Guarulhos, SP',
        status: 'Em trânsito',
        description: 'Mercadoria em trânsito para o destino'
      },
      {
        date: '08/01/2026',
        time: '08:00',
        location: 'São Paulo, SP',
        status: 'Coletado',
        description: 'Mercadoria coletada no remetente'
      },
      {
        date: '07/01/2026',
        time: '16:45',
        location: 'São Paulo, SP',
        status: 'Pedido registrado',
        description: 'Pedido de transporte registrado no sistema'
      }
    ]
  },
  'ROMA789012': {
    code: 'ROMA789012',
    status: 'entregue',
    origin: 'Campinas, SP',
    destination: 'Belo Horizonte, MG',
    estimatedDelivery: '05/01/2026',
    events: [
      {
        date: '05/01/2026',
        time: '10:15',
        location: 'Belo Horizonte, MG',
        status: 'Entregue',
        description: 'Mercadoria entregue ao destinatário'
      },
      {
        date: '04/01/2026',
        time: '18:00',
        location: 'Centro de Distribuição - BH, MG',
        status: 'Saiu para entrega',
        description: 'Mercadoria saiu para entrega'
      },
      {
        date: '04/01/2026',
        time: '06:00',
        location: 'Campinas, SP',
        status: 'Em trânsito',
        description: 'Mercadoria em trânsito'
      }
    ]
  }
};

const getStatusInfo = (status: TrackingResult['status']) => {
  switch (status) {
    case 'em_transito':
      return { label: 'Em Trânsito', color: 'text-roma-600 bg-roma-100', icon: Truck };
    case 'entregue':
      return { label: 'Entregue', color: 'text-green-600 bg-green-100', icon: CheckCircle };
    case 'pendente':
      return { label: 'Pendente', color: 'text-yellow-600 bg-yellow-100', icon: Clock };
    case 'problema':
      return { label: 'Problema', color: 'text-red-600 bg-red-100', icon: AlertCircle };
    default:
      return { label: 'Desconhecido', color: 'text-gray-600 bg-gray-100', icon: Package };
  }
};

export const TrackingPage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);
    
    if (!trackingCode.trim()) {
      setError('Por favor, insira um código de rastreamento');
      return;
    }

    setIsLoading(true);
    
    // Simular delay de busca
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const trackingResult = mockTrackingData[trackingCode.toUpperCase()];
    
    if (trackingResult) {
      setResult(trackingResult);
    } else {
      setError('Código de rastreamento não encontrado. Verifique o código e tente novamente.');
    }
    
    setIsLoading(false);
  };

  const statusInfo = result ? getStatusInfo(result.status) : null;
  const StatusIcon = statusInfo?.icon || Package;

  return (
    <div className="min-h-screen bg-gradient-to-b from-roma-50 to-white">
      {/* Header */}
      <header className="bg-roma-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Roma Express
          </a>
          <nav>
            <a href="/" className="hover:underline">
              Voltar ao Início
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-roma-500 rounded-full mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-roma-800 mb-2">
              Rastreamento de Cargas
            </h1>
            <p className="text-muted-foreground">
              Acompanhe sua mercadoria em tempo real
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Digite o código de rastreamento (ex: ROMA123456)"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="h-12 px-8 bg-roma-500 hover:bg-roma-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Buscando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Rastrear
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Status Header */}
              <div className="bg-roma-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-roma-100 text-sm mb-1">Código de Rastreamento</p>
                    <p className="text-2xl font-bold">{result.code}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${statusInfo?.color}`}>
                    <StatusIcon className="w-5 h-5" />
                    <span className="font-semibold">{statusInfo?.label}</span>
                  </div>
                </div>
              </div>

              {/* Route Info */}
              <div className="p-6 border-b">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-roma-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-roma-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Origem</p>
                      <p className="font-semibold text-foreground">{result.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-roma-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-roma-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Destino</p>
                      <p className="font-semibold text-foreground">{result.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-roma-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-roma-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Previsão de Entrega</p>
                      <p className="font-semibold text-foreground">{result.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Histórico de Movimentação</h3>
                <div className="space-y-4">
                  {result.events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-roma-500' : 'bg-gray-300'}`} />
                        {index < result.events.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 my-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-sm font-semibold ${index === 0 ? 'text-roma-600' : 'text-foreground'}`}>
                            {event.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {event.date} às {event.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-sm text-foreground mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">
              Precisa de ajuda com seu rastreamento?
            </p>
            <a 
              href="/#contato" 
              className="text-roma-600 hover:text-roma-700 font-semibold hover:underline"
            >
              Entre em contato conosco
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-roma-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-roma-200">
            © {new Date().getFullYear()} Roma Express - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};
