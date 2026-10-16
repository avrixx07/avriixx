import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Navigation({ active }) {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const links = lang === 'id' ? [['work','KARYA'], ['about','TENTANG'], ['skills','KEAHLIAN'], ['contact','KONTAK']] : [['work','WORK'], ['about','ABOUT'], ['skills','SKILLS'], ['contact','CONTACT']]
  return <header className="nav-shell">
    <a className="brand" href="#top" aria-label="Aufariq home">A<span>↗</span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      {links.map(([link,label], index) => <a className={active === link ? 'active' : ''} onClick={() => setOpen(false)} href={`#${link}`} key={link}><span>0{index + 1}</span>{label}</a>)}
    </nav>
    <div className="nav-tools"><button className="lang-toggle" onClick={() => setLang(lang === 'id' ? 'en' : 'id')} aria-label="Ganti bahasa"><b>{lang.toUpperCase()}</b><span>/</span>{lang === 'id' ? 'EN' : 'ID'}</button><div className="availability"><i /> {lang === 'id' ? 'TERSEDIA UNTUK BEKERJA' : 'AVAILABLE FOR WORK'}</div></div>
    <button className="menu-toggle" aria-label={lang === 'id' ? 'Buka menu' : 'Toggle menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>
}
