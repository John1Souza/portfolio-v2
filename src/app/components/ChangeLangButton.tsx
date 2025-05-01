'use client';

import { useTranslation } from 'react-i18next';

type Language = 'pt' | 'en';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLng = i18n.language as Language;

  const changeLanguage = (newLng: Language) => {
    if (newLng === currentLng) return;
    i18n.changeLanguage(newLng).catch((err) => {
      console.warn(`Failed to change language to ${newLng}: ${err}`);
    });
  };

  return (
    <div className="flex gap-2 absolute top-16 right-1 z-50 bg-slate-100/10 backdrop-filter backdrop-blur-sm border border-indigo-400/20 rounded-full px-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`py-1 text-step-1 ${currentLng === 'pt' ? 'font-bold text-indigo-400' : 'text-gray-200'}`}
        aria-label="Switch to Portuguese"
        aria-current={currentLng === 'pt' ? 'true' : 'false'}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`py-1 text-step-1 ${currentLng === 'en' ? 'font-bold text-indigo-400' : 'text-gray-200'}`}
        aria-label="Switch to English"
        aria-current={currentLng === 'en' ? 'true' : 'false'}
      >
        EN
      </button>
    </div>
  );
}