import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import IntroSequence from './components/IntroSequence'
import Navigation from './components/Navigation'
import HeroScene from './components/HeroScene'
import AboutScene from './components/AboutScene'
import ProjectShowcase from './components/ProjectShowcase'
import SkillsScene from './components/SkillsScene'
import ProcessTimeline from './components/ProcessTimeline'
import ContactScene from './components/ContactScene'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import { LanguageContext } from './LanguageContext'

gsap.registerPlugin(ScrollTrigger)
export default function App() {
  const root = useRef(null); const [progress, setProgress] = useState(0); const [active, setActive] = useState('work'); const [lang, setLang] = useState('id')
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: .09, smoothWheel: true })
    let frame; const raf = t => { lenis.raf(t); frame = requestAnimationFrame(raf) }; frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])
  useEffect(() => { const onScroll = () => setProgress(scrollY / Math.max(document.documentElement.scrollHeight - innerHeight, 1)); addEventListener('scroll', onScroll, { passive: true }); return () => removeEventListener('scroll', onScroll) }, [])
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const introDelay = 3.65
      gsap.from('.hero-line', { yPercent: 120, duration: 1.05, stagger: .1, ease: 'power4.out', delay: introDelay })
      gsap.from('.hero-bottom, .hero-eyebrow, .scroll-cue', { opacity: 0, y: 24, duration: .7, delay: introDelay + .4, stagger: .07 })
      gsap.to('.orb-one', { yPercent: 45, rotate: 70, scrollTrigger: { trigger: '.hero', scrub: 1, start: 'top top', end: 'bottom top' } })
      gsap.utils.toArray('.section-heading, .about-title-wrap, .skills-head, .contact h2').forEach(el => gsap.from(el, { y: 90, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } }))
      gsap.utils.toArray('.project-card').forEach(card => gsap.from(card, { y: 90, opacity: 0, duration: 1, scrollTrigger: { trigger: card, start: 'top 82%' } }))
      gsap.from('.process-step', { x: 80, opacity: 0, stagger: .12, scrollTrigger: { trigger: '.process-track', start: 'top 78%' } })
      ;['work','about','skills','contact'].forEach(id => ScrollTrigger.create({ trigger: `#${id}`, start: 'top center', end: 'bottom center', onToggle: self => self.isActive && setActive(id) }))
    }, root)
    return () => ctx.revert()
  }, [])
  return <LanguageContext.Provider value={{ lang, setLang }}><div ref={root}><IntroSequence/><CustomCursor/><ScrollProgress progress={progress}/><Navigation active={active}/><main id="main"><HeroScene/><ProjectShowcase/><AboutScene/><SkillsScene/><ProcessTimeline/><ContactScene/></main><Footer/></div></LanguageContext.Provider>
}
