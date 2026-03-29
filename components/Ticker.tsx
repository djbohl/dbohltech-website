const items = [
  'AI Tools',
  'Claude Skills',
  'Automations',
  'Browser Extensions',
  'Graphic Design',
  'Web Apps',
  'Mobile Apps',
  'AI Agents',
  'MCP Servers',
  'Cowork Plugins',
  'Full-Stack Dev',
  'Brand Design',
  // duplicated for seamless loop
  'AI Tools',
  'Claude Skills',
  'Automations',
  'Browser Extensions',
  'Graphic Design',
  'Web Apps',
  'Mobile Apps',
  'AI Agents',
  'MCP Servers',
  'Cowork Plugins',
  'Full-Stack Dev',
  'Brand Design',
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
