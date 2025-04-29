// components/LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLng: string) => {
    const segments = pathname.split('/');
    segments[1] = newLng; // Substitui o segmento de idioma
    
    // Atualiza o i18n e a URL
    i18n.changeLanguage(newLng);
    router.replace(segments.join('/'));
  };

  const currentLng = pathname.split('/')[1] || 'pt';

  return (
    <div className="flex gap-2 absolute top-5 z-50 bg-slate-100/10 backdrop-filter backdrop-blur-sm border border-indigo-400/20 rounded-full flex px-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={currentLng === 'pt' ? 'font-bold text-indigo-400' : ''}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={currentLng === 'en' ? 'font-bold text-indigo-400' : ''}
      >
        EN
      </button>
    </div>
  );
}