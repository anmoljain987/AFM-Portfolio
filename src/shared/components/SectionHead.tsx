export default function SectionHead({ n, title, note }:
  { n: string; title: string; note?: string }) {
  return (
    <div className="shead">
      <span className="shead-n mono">{n}</span>
      <h2>{title}</h2>
      {note && <span className="shead-note mono">{note}</span>}
    </div>
  )
}
