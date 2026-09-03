import { BrainCircuit, Code2, Cpu, Database, Sparkles } from 'lucide-react'

const technologies = ['Java', 'React', 'Spring Boot', 'AI', 'IoT', 'SQL']

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Software Developer</p>
        <h1>Building practical software &amp; AI solutions.</h1>
        <p className="hero-text">
          I&apos;m Lehlohonolo Motsoeneng, a software developer passionate about
          artificial intelligence, IoT and building technology that solves real-world
          problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary-button">
            Explore Projects
          </a>
          <a href="#contact" className="button secondary-button">
            Let&apos;s Connect
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
        <div className="code-window" aria-hidden="true">
          <div className="window-header">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
          </div>

          <pre>
            <code>{`const developer = {
  name: "Lehlohonolo",
  focus: "Software & AI",
  mindset: "Keep Learning",
  build: ["AI", "IoT", "Web"]
};`}</code>
          </pre>
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
