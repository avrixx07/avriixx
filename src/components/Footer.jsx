import { useLanguage } from '../LanguageContext'
export default function Footer() { const { lang } = useLanguage(); return <footer><span>© {new Date().getFullYear()} AUFARIQ RAJABI FRISTYAN</span><a href="#top">{lang === 'id' ? 'KEMBALI KE ATAS' : 'BACK TO TOP'} ↑</a><span>INDONESIA</span></footer> }
