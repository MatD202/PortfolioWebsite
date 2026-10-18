import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): 'sl' | 'en' {
  const [, lang] = url.pathname.split('/');
  if (lang === 'sl' || lang === 'en') return lang;
  return defaultLang;
}

export function useTranslations(lang: 'sl' | 'en') {
  return function t(key: keyof typeof ui['sl']) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}