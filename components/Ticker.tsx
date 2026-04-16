const items = [
  'Backend Dev',
  'Data Engineering',
  'Python',
  'Kubernetes',
  'PostgreSQL',
  'REST APIs',
  'Cloud Infrastructure',
  'CI/CD',
  'AI Integrations',
  'Full-Stack',
  'System Architecture',
  'Automation',
  'Docker',
  'Data Visualization',
  // duplicated for seamless loop
  'Backend Dev',
  'Data Engineering',
  'Python',
  'Kubernetes',
  'PostgreSQL',
  'REST APIs',
  'Cloud Infrastructure',
  'CI/CD',
  'AI Integrations',
  'Full-Stack',
  'System Architecture',
  'Automation',
  'Docker',
  'Data Visualization',
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
