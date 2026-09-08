import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Globe, Menu, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Journey', path: '/journey' },
  { label: 'Reflections', path: '/reflections' },
  { label: 'Outcomes', path: '/outcomes' },
  { label: 'Documents', path: '/documents' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.replace(/\/$/, '') || '/')
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="/" className="brand" aria-label="Lehlohonolo home">
          <span className="brand-mark">LM</span>
          <span className="brand-text">Lehlohonolo</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`} id="mobile-menu">
          <ul className="nav-links">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <a
                  href={path}
                  className={currentPath === path ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-socials" aria-label="Social links">
            <a
              href={siteConfig.github}
              aria-label="GitHub"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={18} />
            </a>
            <a
              href={siteConfig.linkedin || '#'}
              aria-label={siteConfig.linkedin ? 'LinkedIn' : 'LinkedIn placeholder'}
              className="icon-button"
              onClick={(event) => {
                if (!siteConfig.linkedin) {
                  event.preventDefault()
                }
              }}
              target={siteConfig.linkedin ? '_blank' : undefined}
              rel={siteConfig.linkedin ? 'noopener noreferrer' : undefined}
            >
              <BriefcaseBusiness size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
