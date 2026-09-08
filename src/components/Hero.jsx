import { BrainCircuit, Code2, Cpu, Database, Sparkles } from 'lucide-react'
import profilePhoto from '../assets/profile.jpeg'

const technologies = ['Java', 'React', 'Spring Boot', 'AI', 'IoT', 'SQL']

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Software Developer <span className="eyebrow-divider">/</span> AI Explorer <span className="eyebrow-divider">/</span> IoT Enthusiast</p>
        <h1>Building technology <em>with purpose.</em></h1>
        <p className="hero-text">
          I&apos;m Lehlohonolo Motsoeneng, a software developer passionate about
          artificial intelligence, IoT and building technology that solves real-world
          problems.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="button primary-button">
            Explore Projects
          </a>
          <a href="/contact" className="button secondary-button">
            Let&apos;s Connect
          </a>
          <a href="https://github.com/LehlohnoloMotsoeneng" className="text-link" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="tech-stack" aria-label="Technology indicators">
          {technologies.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" aria-hidden="true" />
          <div className="hero-photo-frame">
            <img
              src={profilePhoto}
              alt="Lehlohonolo Motsoeneng at the 2026 CPUT graduation ceremony"
              className="hero-photo"
            />
          </div>
          <div className="hero-achievement">
            <span className="achievement-year">2026</span>
            <span>National Diploma<br />ICT: Application Development</span>
            <small>CPUT / milestone achieved</small>
          </div>
          <div className="hero-status"><span /> Available to build</div>
        </div>

        <div className="floating-card card-ai">
          <BrainCircuit size={18} />
          <span>AI</span>
        </div>

        <div className="floating-card card-code">
          <Code2 size={18} />
          <span>Code</span>
        </div>

        <div className="floating-card card-data">
          <Database size={18} />
          <span>Data</span>
        </div>

        <div className="orb orb-cyan" />
        <div className="orb orb-purple" />
        <div className="signal signal-top">
          <Cpu size={16} />
        </div>
        <div className="signal signal-bottom">
          <Sparkles size={16} />
        </div>
      </div>
    </section>
  )
}

export default Hero
