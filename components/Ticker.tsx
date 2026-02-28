const items = [
  'Web Applications',
  'Mobile Apps',
  'Browser Extensions',
  'Full-Stack Development',
  'UI/UX Design',
  'Graphic Design',
  'API Integration',
  // duplicated for seamless loop
  'Web Applications',
  'Mobile Apps',
  'Browser Extensions',
  'Full-Stack Development',
  'UI/UX Design',
  'Graphic Design',
  'API Integration',
]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div key={i} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
