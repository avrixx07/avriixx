import { ArrowUpRight, ExternalLink, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function ContactScene() {
  const { lang } = useLanguage(); const id = lang === 'id'
  return <section className="contact scene" id="contact" aria-labelledby="contact-title">
    <div className="contact-frame" />
    <div className="section-index">05 / {id ? 'KONTAK' : 'CONTACT'}</div>
    <h2 id="contact-title"><span>{id ? 'MARI BUAT' : "LET'S BUILD"}</span><span>{id ? 'SESUATU' : 'SOMETHING'}</span><span>{id ? 'BERMAKNA.' : 'USEFUL.'}</span></h2>
    <p>{id ? 'Terbuka untuk peluang frontend development, proyek kolaboratif, dan diskusi mengenai produk digital yang bermanfaat.' : 'Open to frontend development opportunities, collaborative projects, and conversations about practical digital products.'}</p>
    <div className="contact-actions">
      <a className="button primary" href="mailto:Aufariq123@gmail.com"><Mail /> {id ? 'KIRIM EMAIL' : 'SEND EMAIL'} <ArrowUpRight /></a>
      <a className="icon-button" href="tel:+6285704925946" aria-label="Telepon Aufariq" title="+62 857 0492 5946"><Phone /></a>
      <a className="icon-button" href="https://www.linkedin.com/in/aufariqrf/" target="_blank" rel="noreferrer" aria-label="LinkedIn Aufariq"><ExternalLink /></a>
    </div>
    <div className="contact-details"><a href="mailto:Aufariq123@gmail.com">Aufariq123@gmail.com</a><a href="tel:+6285704925946">+62 857 0492 5946</a></div>
    <div className="closing"><span>AUFARIQ</span><small>WEB DEVELOPER · {id ? 'TEKNIK INFORMATIKA' : 'INFORMATICS ENGINEERING'}</small></div>
  </section>
}
