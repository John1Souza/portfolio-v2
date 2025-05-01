'use client';

import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from '../providers/I18nProvider';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  // Dynamically update html lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return <I18nProvider>{children}</I18nProvider>;
}