import { createContext, useContext } from 'react'

export const LanguageContext = createContext({ lang: 'id', setLang: () => {} })
export const useLanguage = () => useContext(LanguageContext)
