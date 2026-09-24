import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

const services = [
  { number: '01', title: 'Web Development', description: 'Digital experiences engineered to be fast, flexible, and unmistakably yours.' },
  { number: '02', title: 'App Development', description: 'Useful, intuitive products that make complex things feel remarkably simple.' },
  { number: '03', title: 'UI/UX Design', description: 'Thoughtful interfaces shaped by human behavior, not passing trends.' },
]

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line"></span> Independent digital studio</p>
          <h1>Ideas worth <em>moving</em> <span>forward.</span></h1>
          <p className="hero-text">Northstar is a digital agency for ambitious people building the next useful thing. We bring clarity, character, and momentum to brands in motion.</p>
          <div className="hero-actions"><Button to="/contact">Start a project</Button><Link className="text-link" to="/services">Explore our work <span aria-hidden="true">↓</span></Link></div>
        </div>
        <div className="hero-art" aria-label="Abstract colorful digital artwork" role="img">
          <div className="art-label">Est. 2014 <span>•</span> NYC / Worldwide</div>
          <div className="sun-shape"></div><div className="arch-shape"></div><div className="flower-shape"><i></i><i></i><i></i><i></i><i></i></div><div className="art-square"></div>
          <p className="art-caption">Make room for<br /><strong>what's next.</strong></p>
        </div>
      </section>
      <section className="marquee-band" aria-label="Our approach"><div className="marquee-track"><span>Strategy</span><i>✳</i><span>Design</span><i>✳</i><span>Technology</span><i>✳</i><span>Strategy</span><i>✳</i><span>Design</span><i>✳</i></div></section>
      <section className="section container intro-section"><div className="intro-stamp">01<br /><span>Who we are</span></div><div className="intro-content"><SectionHeading eyebrow="A little context" title="Good work begins with good questions." /><div className="intro-grid"><p className="lead-copy">We partner with teams who care deeply about the difference they want to make. Together, we turn big questions into clear direction, and clear direction into work people remember.</p><p className="body-copy">From first sketch to final launch, we stay curious, collaborative, and close to the work. No layers of process for process's sake. Just a thoughtful team, a shared ambition, and a bias toward making.</p></div><Link className="underlined-link" to="/about">More about Northstar <span aria-hidden="true">↗</span></Link></div></section>
      <section className="section services-preview"><div className="container"><SectionHeading eyebrow="What we do" title="The right mix of thinking & making." description="Our capabilities flex around the challenge. Always starting with the why, always ending with something that works." /><div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} {...service} featured={index === 1} />)}</div><div className="section-link"><Link className="underlined-link" to="/services">View all services <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="section split-section container"><div className="split-visual"><div className="visual-note">Brand refresh / 2024</div><div className="visual-letter">A</div><div className="visual-circle"></div></div><div className="split-copy"><p className="eyebrow">Built for the long game</p><h2>Distinct is a strategy.</h2><p>In a world full of noise, being remembered is a competitive advantage. We create identities and experiences with enough personality to stick and enough substance to last.</p><Button to="/about" variant="outline">Our point of view</Button></div></section>
      <section className="cta-section"><div className="container cta-inner"><p className="eyebrow">Have a good one?</p><h2>Let's make it <em>matter.</em></h2><Button to="/contact" variant="dark">Tell us everything</Button></div></section>
    </>
  )
}
