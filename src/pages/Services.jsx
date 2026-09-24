import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

const services = [
  { number: '01', title: 'Web Development', description: 'High-performing websites and digital platforms built around real business goals.', detail: 'From nimble marketing sites to complex ecosystems, we make the technical feel effortless.' },
  { number: '02', title: 'App Development', description: 'Products that turn everyday friction into simple, satisfying experiences.', detail: 'We help teams validate, design, and build digital products people choose to use.' },
  { number: '03', title: 'UI/UX Design', description: 'Interfaces with a clear point of view and a generous sense of usability.', detail: 'Research, systems, prototypes, and polished screens that give your product a pulse.' },
  { number: '04', title: 'Digital Marketing', description: 'Strategy and content that find the right people and give them a reason to stay.', detail: 'We connect brand thinking to campaigns, content, and measurable momentum.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero services-hero container"><p className="eyebrow">Our capabilities</p><h1>Make the complex<br /><em>feel simple.</em></h1><p className="page-hero-lead">A focused set of capabilities, brought together to help ambitious ideas get clear, get made, and get noticed.</p></section>
      <section className="section service-list-section"><div className="container"><SectionHeading eyebrow="How we help" title="From first thought to finished thing." /><div className="service-list">{services.map((service) => <div className="service-list-row" key={service.title}><ServiceCard {...service} /><div className="service-detail"><p>{service.detail}</p><Button to="/contact" variant="text">Explore this service</Button></div></div>)}</div></div></section>
      <section className="process-section"><div className="container process-grid"><div><p className="eyebrow">Our process</p><h2>Good work is a team sport.</h2></div><div className="process-steps"><div><span>01</span><h3>Listen closely</h3><p>We get curious about your context, your people, and the opportunity hiding in plain sight.</p></div><div><span>02</span><h3>Find the signal</h3><p>We turn a lot of possibilities into one clear direction the whole team can get behind.</p></div><div><span>03</span><h3>Make it real</h3><p>We work in the open, test as we go, and deliver work that is ready to move.</p></div></div></div></section>
      <section className="cta-section services-cta"><div className="container cta-inner"><p className="eyebrow">Something in mind?</p><h2>Let's find the<br /><em>right shape.</em></h2><Button to="/contact" variant="dark">Start a conversation</Button></div></section>
    </>
  )
}
