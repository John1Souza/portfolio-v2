
'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

export default function I18nProvider({
  children
}: {
  children: ReactNode;
}) {

  useEffect(() => {
    // Preload translations
    i18n.loadLanguages(['pt', 'en']).catch((err) => {
      console.warn('Failed to preload translations:', err);
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
  );
}