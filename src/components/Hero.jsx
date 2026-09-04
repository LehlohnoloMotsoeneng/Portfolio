import { ArrowRight } from 'lucide-react'
import profilePhoto from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">
          Software Developer <span className="eyebrow-divider">•</span> AI • Web • IoT
        </p>

        <h1>
          Building technology
          <span>with purpose.</span>
        </h1>

        <p className="hero-text">
          I&apos;m Lehlohonolo Motsoeneng, a software developer focused on building practical
          digital solutions across web development, AI and emerging technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary-button">
            <span>View my work</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="button secondary-button">
            Let&apos;s Connect
          </a>
        </div>

        <div className="hero-meta">
          <a
            href="https://github.com/LehlohnoloMotsoeneng"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" aria-hidden="true" />
          <div className="hero-photo-frame">
            <img
              src={profilePhoto}
              alt="Lehlohonolo Motsoeneng in a graduation portrait"
              className="hero-photo"
            />
          </div>

          <div className="hero-status" aria-label="Available to build">
            <span aria-hidden="true" /> Available to build
          </div>

          <div className="hero-achievement">
            <span className="achievement-year">2026</span>
            <span className="achievement-detail">National Diploma<br />ICT: Application Development</span>
            <small>CPUT</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
