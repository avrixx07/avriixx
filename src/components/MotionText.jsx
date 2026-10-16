export default function MotionText({ children, as: Tag = 'span', className = '' }) {
  return <Tag className={`motion-text ${className}`} aria-label={children}>{[...children].map((char, i) => <span className="motion-char" aria-hidden="true" key={`${char}-${i}`}>{char === ' ' ? '\u00a0' : char}</span>)}</Tag>
}
