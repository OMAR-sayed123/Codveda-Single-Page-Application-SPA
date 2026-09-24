import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link className="brand footer-brand" to="/"><span className="brand-mark">N</span><span>northstar<span className="brand-dot">.</span></span></Link>
          <p className="footer-intro">An independent digital studio building brands with staying power.</p>
        </div>
        <div className="footer-links">
          <div><p className="footer-label">Explore</p><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/contact">Start a project</Link></div>
          <div><p className="footer-label">Say hello</p><a href="mailto:hello@northstar.studio">hello@northstar.studio</a><a href="tel:+1555014890">+1 555 014 890</a></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2024 Northstar Studio</span><span>Made for the meaningful.</span><span className="footer-socials"><a href="#linkedin" aria-label="LinkedIn">in</a><a href="#instagram" aria-label="Instagram">ig</a></span></div>
    </footer>
  )
}
