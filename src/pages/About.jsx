import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      <section className="page-hero container"><p className="eyebrow">About Northstar</p><h1>We make useful things<br /><em>feel inevitable.</em></h1><p className="page-hero-lead">We are a small, senior-led digital agency with a simple belief: the best work is both meaningful and effective.</p></section>
      <section className="section about-intro container"><div className="about-image"><div className="about-image-label">Northstar / field notes</div><div className="about-sun"></div><div className="about-grid-lines"></div><strong>Care<br />is our<br /><em>edge.</em></strong></div><div className="about-copy"><SectionHeading eyebrow="Our story" title="Small by design. Big on intent." /><p>Northstar started with two designers, a borrowed desk, and a shared frustration with forgettable digital work. A decade later, we are still independent, still curious, and still close to the craft.</p><p>Our team combines strategy, brand, design, and technology under one roof. That means fewer handoffs, better conversations, and ideas that make it all the way into the world.</p><Button to="/contact" variant="outline">Work with us</Button></div></section>
      <section className="section values-section"><div className="container"><SectionHeading eyebrow="What guides us" title="A few things we believe." /><div className="values-grid"><article><span>01</span><h3>Clarity creates freedom.</h3><p>When the problem is understood, the most interesting solutions have room to appear.</p></article><article><span>02</span><h3>Details do the heavy lifting.</h3><p>Every choice is an opportunity to make the whole experience feel more considered.</p></article><article><span>03</span><h3>Progress beats perfection.</h3><p>The work gets better when it gets shared. Early, often, and with the right people.</p></article></div></div></section>
      <section className="stats-section"><div className="container stats-grid"><div><strong>10<span>+</span></strong><p>Years of making</p></div><div><strong>42</strong><p>Brands launched</p></div><div><strong>12</strong><p>Countries reached</p></div><div><strong>94<span>%</span></strong><p>Repeat partnerships</p></div></div></section>
      <section className="section about-cta container"><p className="eyebrow">The short version</p><h2>We care about the work.<br /><em>And who it's for.</em></h2><Button to="/contact">Let's talk</Button></section>
    </>
  )
}
