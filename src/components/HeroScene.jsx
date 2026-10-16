import { ArrowDownRight } from 'lucide-react'
import MotionText from './MotionText'
import { useLanguage } from '../LanguageContext'

export default function HeroScene() {
  const { lang } = useLanguage()
  const id = lang === 'id'
  return <section className="hero scene" id="top" aria-labelledby="hero-title">
    <div className="hero-grid" /><div className="orb orb-one" /><div className="orb orb-two" />
    <div className="scene-label"><span>AUFARIQ RAJABI FRISTYAN</span><span>INDONESIA</span></div>
    <p className="hero-eyebrow">{id ? 'LULUSAN TEKNIK INFORMATIKA · WEB DEVELOPER' : 'INFORMATICS ENGINEERING GRADUATE · WEB DEVELOPER'}</p>
    <h1 id="hero-title"><span className="hero-line line-a">{id ? 'MEMBANGUN' : 'BUILDING'}</span><span className="hero-line line-b">{id ? 'ANTARMUKA' : 'USEFUL'}</span><MotionText className="hero-line line-c">{id ? 'BERMAKNA.' : 'INTERFACES.'}</MotionText></h1>
    <div className="hero-bottom"><p>{id ? 'Developer berfokus pada frontend yang menciptakan pengalaman web responsif, terstruktur, dan ramah pengguna.' : 'A frontend-focused developer creating responsive, structured, and user-friendly web experiences.'}</p><div className="hero-actions"><a className="button primary" href="#work">{id ? 'LIHAT KARYA' : 'VIEW MY WORK'} <ArrowDownRight /></a><a className="button ghost" href="#contact">{id ? 'HUBUNGI SAYA' : 'CONTACT ME'}</a></div></div>
    <div className="scroll-cue"><span>{id ? 'GULIR UNTUK MENJELAJAH' : 'SCROLL TO EXPLORE'}</span><i /></div>
  </section>
}
