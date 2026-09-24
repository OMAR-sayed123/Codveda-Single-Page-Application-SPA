const serviceIcons = {
  'Web Development': '⌘',
  'App Development': '◈',
  'UI/UX Design': '✦',
  'Digital Marketing': '◌',
}

export default function ServiceCard({ number, title, description, featured = false }) {
  return (
    <article className={`service-card ${featured ? 'service-card-featured' : ''}`}>
      <div className="service-card-top">
        <span className="service-number">{number}</span>
        <span className="service-icon" aria-hidden="true">{serviceIcons[title]}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </article>
  )
}
