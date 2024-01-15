// useLanguage.js
import LanguageContext from '@/providers/LanguageContext';
import { useContext } from 'react';

const useLang = () => {
  const lang = useContext(LanguageContext);

  if (!lang) {
    // Puedes manejar esto de alguna manera (lanzar una excepción, mostrar un mensaje de error, etc.)
    return null;
  }

  return lang.texts;
};

export default useLang;
