'use client';

import { useEffect, useState } from 'react';

export default function InitialLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center">
          {/* Seu logo ou iniciais */}
          <div className="text-4xl font-bold text-primary animate-pulse">JS</div>
          
          {/* Spinner */}
          <div className="mt-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
          
          {/* Texto */}
          <p className="mt-4 text-muted-foreground">Carregando portfólio...</p>
        </div>
      </div>
    </div>
  );
}