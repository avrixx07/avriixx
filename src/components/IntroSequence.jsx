import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

function playIntroSound() {
  const AudioEngine = window.AudioContext || window.webkitAudioContext
  if (!AudioEngine) return null
  const ctx = new AudioEngine()
  const master = ctx.createGain()
  master.gain.setValueAtTime(0.0001, ctx.currentTime)
  master.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + .08)
  master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8)
  master.connect(ctx.destination)

  const tone = (frequency, delay, duration, type = 'sine') => {
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()
    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay)
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.7, ctx.currentTime + delay + duration)
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay)
    gain.gain.exponentialRampToValueAtTime(.32, ctx.currentTime + delay + .04)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration)
    oscillator.connect(gain); gain.connect(master)
    oscillator.start(ctx.currentTime + delay); oscillator.stop(ctx.currentTime + delay + duration)
  }
  tone(72, 0, 1.1, 'sine')
  tone(190, .7, .45, 'triangle')
  tone(310, 1.25, .7, 'sine')
  tone(520, 2.05, .35, 'triangle')
  return ctx
}

export default function IntroSequence() {
  const [visible, setVisible] = useState(true)
  const [sound, setSound] = useState(false)
  const audio = useRef(null)

  useEffect(() => {
    audio.current = playIntroSound()
    const activateAudio = async () => {
      if (audio.current?.state === 'suspended') await audio.current.resume()
      if (audio.current?.state === 'running') setSound(true)
    }
    activateAudio()
    window.addEventListener('pointerdown', activateAudio, { once: true })
    window.addEventListener('keydown', activateAudio, { once: true })
    const done = setTimeout(() => setVisible(false), 4300)
    return () => {
      clearTimeout(done)
      window.removeEventListener('pointerdown', activateAudio)
      window.removeEventListener('keydown', activateAudio)
      audio.current?.close?.()
    }
  }, [])

  const enableSound = () => {
    if (!sound) {
      audio.current?.close?.()
      audio.current = playIntroSound()
      audio.current?.resume?.()
    } else audio.current?.close?.()
    setSound(!sound)
  }

  if (!visible) return null
  return <div className="intro intro-v2" role="dialog" aria-label="Aufariq introduction" aria-modal="true">
    <div className="intro-grid" />
    <div className="intro-scan" />
    <svg className="intro-geometry" viewBox="0 0 1000 700" aria-hidden="true">
      <circle cx="500" cy="350" r="210" /><circle cx="500" cy="350" r="105" />
      <path d="M40 350H960M500 40V660M120 120L880 580M880 120L120 580" />
    </svg>
    <div className="intro-core"><i /><i /><i /></div>
    <div className="intro-corners" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="intro-brand" aria-label="Aufariq">
      <span className="intro-brand-shadow">AUFARIQ</span>
      <span className="intro-brand-main">{'AUFARIQ'.split('').map((letter, i) => <b key={i}>{letter}</b>)}</span>
    </div>
    <div className="intro-meta"><span>FULLSTACK WEB DEVELOPER</span><span>TEKNOLOGI KREATIF</span><span>INDONESIA · 2026</span></div>
    <div className="intro-status"><span>MEMUAT PORTFOLIO</span><i><b /></i><span>100%</span></div>
    <button className="intro-sound" onClick={enableSound}>{sound ? <Volume2 /> : <VolumeX />} {sound ? 'SUARA AKTIF' : 'AKTIFKAN SUARA'}</button>
    <button className="intro-skip" onClick={() => setVisible(false)}>↗</button>
  </div>
}
