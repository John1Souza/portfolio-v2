// lib/i18n.ts
"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: 'Hi all. I am',
                about: 'About',
            }
        },
        pt: {
            translation: {
                welcome: "Bem-vindo",
                about: "Sobre"
            }
        }
    },
    lng: "pt", // idioma padrão
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;