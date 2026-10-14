/** Per-character reveal. Characters are spans; the word stays one unit for wrapping. */
export default function SplitText({ text, delay = 0, className = '' }:
  { text: string; delay?: number; className?: string }) {
  let i = 0
  return (
    <span className={`split ${className}`} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span className="split-w" key={w} aria-hidden="true">
          {word.split('').map((ch, c) => {
            const d = delay + i++ * 0.012
            return <span className="split-c" key={c} style={{ animationDelay: `${d}s` }}>{ch}</span>
          })}
        </span>
      ))}
    </span>
  )
}
