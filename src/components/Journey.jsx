import {
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  GraduationCap,
  Target,
  Users,
} from 'lucide-react'

const journeyStages = [
  {
    number: '01',
    title: 'Academic Foundation',
    period: 'Foundations',
    description:
      'Developed foundational knowledge in Information and Communication Technology with a focus on Application Development, including programming, databases, software development, web development, systems analysis and application development.',
    skills: ['Programming', 'Databases', 'Software Development', 'Web Development', 'Systems Analysis'],
    icon: GraduationCap,
  },
  {
    number: '02',
    title: 'Software Development',
    period: 'Practical Build',
    description:
      'Built practical software projects while developing experience with backend, frontend, database and API development, with emphasis on problem solving, application development, API design, database design, frontend development, testing and debugging.',
    skills: ['Java', 'Spring Boot', 'React', 'JavaScript', 'SQL', 'MySQL'],
    icon: Code2,
  },
  {
    number: '03',
    title: 'AI & Emerging Technologies',
    period: 'Exploration',
    description:
      'Expanded my development interests into artificial intelligence and emerging technologies through practical projects and experimentation, working with and exploring generative AI, prompt engineering, natural language processing, sentiment analysis, AI-powered applications and IoT exploration.',
    skills: ['Generative AI', 'Prompt Engineering', 'NLP', 'Sentiment Analysis', 'AI Applications', 'IoT'],
    icon: BrainCircuit,
  },
  {
    number: '04',
    title: 'CAPACITI — Demand Academy',
    period: 'Professional Growth',
    description:
      'Participating in the CAPACITI Demand Academy to strengthen practical technical capabilities, professional workplace readiness and exposure to industry-oriented technology development across technical development, professional development, industry readiness, collaboration, problem solving and continuous learning.',
    skills: ['Technical Development', 'Professional Development', 'Industry Readiness', 'Collaboration', 'Problem Solving'],
    icon: BriefcaseBusiness,
  },
]

const capacitiAreas = [
  {
    title: 'TECHNICAL',
    description: 'Software development\nAI exploration\nProblem solving',
    icon: Cpu,
  },
  {
    title: 'PROFESSIONAL',
    description: 'Communication\nTeamwork\nAccountability',
    icon: Users,
  },
  {
    title: 'INDUSTRY',
    description: 'Workplace readiness\nPractical exposure\nContinuous development',
    icon: Target,
  },
]

const developmentCards = [
  {
    number: '01',
    title: 'Technical Thinking',
    description:
      'Learning to break complex problems into smaller, manageable components and design practical solutions.',
  },
  {
    number: '02',
    title: 'Software Development',
    description:
      'Developing applications across frontend, backend, APIs and databases.',
  },
  {
    number: '03',
    title: 'AI Exploration',
    description:
      'Experimenting with AI technologies and understanding how they can be applied to real-world problems.',
  },
  {
    number: '04',
    title: 'Professional Growth',
    description:
      'Strengthening communication, collaboration, accountability and workplace readiness.',
  },
]

const Journey = () => {
  return (
    <section id="journey" className="section journey-section">
      <div className="section-header">
        <p className="eyebrow">Journey</p>
        <h2>My Journey</h2>
        <p className="section-subtitle">
          From academic foundations to practical software development and AI exploration.
        </p>
      </div>

      <div className="journey-layout">
        <div className="journey-timeline" aria-label="Development journey timeline">
          {journeyStages.map(({ number, title, period, description, skills, icon: Icon }) => (
            <article className="timeline-item journey-item" key={title}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{number}</span>
                <div className="marker-icon">
                  <Icon size={16} />
                </div>
              </div>

              <div className="journey-card">
                <div className="journey-card-topline">
                  <span className="journey-period">{period}</span>
                  <span className="journey-stage">Stage {number}</span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="technology-tags" aria-label={`${title} related skills`}>
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="capaciti-card" aria-labelledby="capaciti-demand-academy-title">
          <div className="capaciti-heading-row">
            <span className="eyebrow">CAPACITI</span>
            <span className="capaciti-mark">Demand Academy</span>
          </div>

          <h3 id="capaciti-demand-academy-title">CAPACITI Demand Academy</h3>
          <p className="capaciti-subtitle">Industry Readiness &amp; Technical Development</p>
          <p className="capaciti-description">
            “An opportunity to strengthen my technical capabilities, professional skills and readiness for the technology industry through structured development, practical work and continuous learning.”
          </p>

          <div className="capaciti-grid">
            {capacitiAreas.map(({ title, description, icon: Icon }) => (
              <div className="capaciti-focus" key={title}>
                <div className="capaciti-icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <h4>{title}</h4>
                <p>{description.split('\n').map((line) => <span key={line}>{line}</span>)}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="development-area">
        <div className="section-header compact-header">
          <p className="eyebrow">Progress</p>
          <h3>What I&apos;ve Developed</h3>
        </div>

        <div className="development-grid">
          {developmentCards.map(({ number, title, description }) => (
            <article className="development-card" key={title}>
              <span className="development-number">{number}</span>
              <h4>{title}</h4>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="journey-connection">
        <div className="journey-connection-panel">
          <div className="connection-icon" aria-hidden="true">
            <BookOpen size={18} />
          </div>
          <div>
            <p className="eyebrow">From Learning to Industry</p>
            <p className="connection-copy">
              CAPACITI has provided an opportunity to connect technical development with professional workplace expectations. My goal is to continue turning what I learn into practical solutions while developing the habits required to contribute effectively within a technology team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
