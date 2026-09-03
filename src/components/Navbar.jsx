import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Globe, Menu, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Reflections', id: 'reflections' },
  { label: 'Outcomes', id: 'outcomes' },
  { label: 'Contact', id: 'contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const visibleSections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!visibleSections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.6],
      },
    )

    visibleSections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Lehlohonolo home">
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
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
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
