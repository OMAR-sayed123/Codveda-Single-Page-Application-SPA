import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { isMenuOpen, isDarkMode, toggleMenu, closeMenu, toggleTheme } = useAppContext()

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="Northstar Studio home">
          <span className="brand-mark">N</span>
          <span>northstar<span className="brand-dot">.</span></span>
        </NavLink>
        <button className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="primary-navigation" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          <span></span><span></span>
        </button>
        <nav id="primary-navigation" className={`primary-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.label}</NavLink>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            <span aria-hidden="true">{isDarkMode ? '☼' : '◐'}</span>
          </button>
          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>Let's talk <span aria-hidden="true">↗</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
