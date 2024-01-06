"use client";

import React, { createContext, useState, ReactNode } from "react";
import { LanguageList } from "../languages/languageList";



interface LanguageContextProps {
  texts: Record<string, string>;
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

const initialLanguage: any = "en";

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(LanguageList[language]);

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(LanguageList.es);
      document.title = "EM Robots - tienda virtual";
    } else if (e.target.value === "en") {
      setLanguage("en");
      setTexts(LanguageList.en);
      document.title = "EM Robots - virtual shop";
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
