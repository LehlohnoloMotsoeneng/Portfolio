const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Reflections', href: '#reflections' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: '#', text: 'GitHub' },
  { label: 'LinkedIn', href: '#', text: 'LinkedIn' },
]

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-branding">
        <p className="footer-name">Lehlohonolo Motsoeneng</p>
        <p className="footer-role">Software Developer | AI &amp; IoT Enthusiast</p>
      </div>

      <div className="footer-links" aria-label="Footer navigation">
        {footerLinks.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>

      <div className="footer-socials" aria-label="Footer social links">
        {socialLinks.map(({ label, href, text }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="footer-social-link"
            onClick={(event) => event.preventDefault()}
          >
            {text}
          </a>
        ))}
      </div>

      <p className="footer-copy">© 2026 Lehlohonolo Motsoeneng. All rights reserved.</p>
    </footer>
  )
}

export default Footer
