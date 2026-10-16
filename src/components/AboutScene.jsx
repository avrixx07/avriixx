import { useLanguage } from '../LanguageContext'
export default function AboutScene() {
  const { lang } = useLanguage(); const id = lang === 'id'
  const facts = id ? [
    ['PENDIDIKAN', 'S1 Teknik Informatika · UIGM'],
    ['KELULUSAN', '2026 · IPK 3,17 / 4,00'],
    ['PENGALAMAN', 'Magang Frontend & Pengembangan UI'],
    ['BAHASA', 'Indonesia · Inggris (Menengah)'],
  ] : [['EDUCATION','B.Informatics Engineering · UIGM'],['GRADUATION','2026 · GPA 3.17 / 4.00'],['EXPERIENCE','Frontend & UI Development Intern'],['LANGUAGES','Indonesian · English (Intermediate)']]
  return <section className="about scene" id="about" aria-labelledby="about-title">
    <div className="section-index">02 / {id ? 'PROFIL' : 'PROFILE'}</div>
    <div className="about-title-wrap"><h2 id="about-title"><span>{id ? 'SOLUSI' : 'PRACTICAL'}</span><span>{id ? 'YANG' : 'BY'} <em>{id ? 'BERGUNA.' : 'DESIGN.'}</em></span></h2><div className="lime-rule" /></div>
    <div className="about-copy">
      <p>{id ? 'Fresh graduate Teknik Informatika dengan pengalaman dari proyek akademik, magang, dan personal—berfokus pada solusi digital yang praktis, ramah pengguna, dan terstruktur.' : 'An Informatics Engineering graduate with academic, internship, and personal project experience—focused on practical, user-friendly, and well-structured digital solutions.'}</p>
      <p className="about-note">{id ? 'Adaptif, memiliki rasa ingin tahu, dan siap berkembang dalam lingkungan pengembangan web profesional.' : 'Adaptable, curious, and ready to grow in a professional web development environment.'}</p>
      <div className="facts">{facts.map(([key, val]) => <div className="fact" key={key}><span>{key}</span><strong>{val}</strong></div>)}</div>
    </div>
    <div className="identity-mark"><span>AR</span><i /><i /><i /></div>
  </section>
}
