'use client';

import { useEffect, useState } from 'react';

export default function LoadingRotas() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay de fundo escuro para contraste */}
      <div className="absolute inset-0 bg-slate-950/80"></div>
      
      {/* Container com glassmorphism */}
      <div className="flex items-center justify-center">
        <div className="text-center space-y-6">
          {/* Seu logo ou iniciais */}
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            JS
          </div>
          
          {/* Spinner com borda sutil */}
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-emerald-400 rounded-full animate-spin"></div>
          </div>
          
          {/* Texto */}
          <p className="text-slate-300">Carregando ...</p>
        </div>
      </div>
    </div>
  );
}