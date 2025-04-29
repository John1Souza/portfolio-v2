// src/providers/I18nProvider.tsx
'use client'; // ESSENCIAL!

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

export default function I18nProvider({ 
  children,
  lng 
}: { 
  children: ReactNode;
  lng: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lng).then(() => setReady(true));
  }, [lng]);

  if (!ready) return null; // Evita hidratação incorreta

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}