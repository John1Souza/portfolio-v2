// components/LanguageSwitcher.tsx
"use client";

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export function ChangeLangButton({ currentLang }: { currentLang: string }) {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(`/${lng}`);
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => changeLanguage('pt')}
        className={currentLang === 'pt' ? 'font-bold' : ''}
      >
        PT
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={currentLang === 'en' ? 'font-bold' : ''}
      >
        EN
      </button>
    </div>
  );
}