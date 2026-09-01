import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

const outcomeCards = [
  {
    title: 'Academic Milestone',
    value: '2026',
    description:
      'Completed the National Diploma in ICT: Application Development at Cape Peninsula University of Technology.',
    icon: GraduationCap,
  },
  {
    title: 'Technology Focus',
    value: 'Software + AI',
    description:
      'Developing practical experience across software development, artificial intelligence, web technologies, databases and emerging technologies.',
    icon: Code2,
  },
  {
    title: 'AI Project Portfolio',
    value: '4 Areas',
    description:
      'Portfolio work covering AI chatbot development, generative AI/content generation, sentiment analysis and an industry-oriented AI solution.',
    icon: Sparkles,
  },
  {
    title: 'Industry Development',
    value: 'CAPACITI',
    description:
      'Participating in the CAPACITI Demand Academy to strengthen technical development, professional capabilities and industry readiness.',
    icon: BriefcaseBusiness,
  },
]

const technicalGroups = [
  {
    title: 'Software Development',
    items: ['Java', 'Spring Boot', 'React', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'Data & Databases',
    items: ['SQL', 'MySQL', 'Supabase'],
  },
  {
    title: 'AI & Emerging Technology',
    items: ['Generative AI', 'Prompt Engineering', 'NLP', 'Sentiment Analysis', 'Machine Learning', 'IoT'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Figma'],
  },
]

const projectMatrix = [
  {
    project: 'AI Chatbot',
    outcome: 'Conversational AI exploration',
  },
  {
    project: 'AI Content Generator',
    outcome: 'Generative AI and prompt-based interaction',
  },
  {
    project: 'Sentiment Analysis',
    outcome: 'NLP and text classification',
  },
  {
    project: 'PathFinder AI',
    outcome: 'Collaborative AI solution development',
  },
]

const capacitiColumns = [
  {
    title: 'TECHNICAL GROWTH',
    items: ['Software development', 'AI exploration', 'Problem solving', 'Development workflows'],
  },
  {
    title: 'PROFESSIONAL GROWTH',
    items: ['Communication', 'Collaboration', 'Accountability', 'Adaptability'],
  },
  {
    title: 'INDUSTRY READINESS',
    items: ['Practical project experience', 'Documentation', 'Continuous learning', 'Professional presentation'],
  },
]

const evidenceCards = [
  {
    number: '01',
    title: 'GitHub Portfolio',
    description: 'Maintaining software projects and development work using Git and GitHub.',
    link: '#',
    label: 'GitHub',
  },
  {
    number: '02',
    title: 'Project Portfolio',
    description: 'A growing portfolio demonstrating software development, AI experimentation and collaborative project work.',
  },
  {
    number: '03',
    title: 'Academic Qualification',
    description: 'National Diploma in ICT: Application Development — CPUT, completed 2026.',
  },
  {
    number: '04',
    title: 'Professional Development',
    description: 'CAPACITI Demand Academy — focused on technical development, professional growth and industry readiness.',
  },
]

const futureMetrics = [
  '[ADD VERIFIED PROJECT COUNT]',
  '[ADD VERIFIED GITHUB REPOSITORY COUNT]',
  '[ADD VERIFIED AI PROJECT COUNT]',
  '[ADD VERIFIED PROJECT RESULTS]',
  '[ADD VERIFIED PERFORMANCE METRICS]',
]

const improvementSteps = ['LEARN', 'BUILD', 'DOCUMENT', 'REFLECT', 'IMPROVE']

const Outcomes = () => {
  return (
    <section id="outcomes" className="section outcomes-section">
      <div className="section-header">
        <p className="eyebrow">Outcomes</p>
        <h2>Measurable Outcomes</h2>
        <p className="section-subtitle">
          Evidence of my technical development, practical project experience and progress toward industry readiness.
        </p>
      </div>

      <div className="outcomes-grid">
        {outcomeCards.map(({ title, value, description, icon: Icon }) => (
          <article className="outcome-card" key={title}>
            <div className="outcome-icon" aria-hidden="true">
              <Icon size={18} />
            </div>
            <span className="outcome-title">{title}</span>
            <strong className="outcome-value">{value}</strong>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="technical-development">
        <div className="section-header compact-header">
          <p className="eyebrow">Technical Growth</p>
          <h3>Technical Development</h3>
        </div>

        <div className="technical-groups">
          {technicalGroups.map(({ title, items }) => (
            <div className="tech-group" key={title}>
              <h4>{title}</h4>
              <div className="tech-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-outcomes">
        <div className="section-header compact-header">
          <p className="eyebrow">Project Evidence</p>
          <h3>Project Outcomes</h3>
        </div>

        <p className="project-outcomes-intro">
          The projects demonstrate practical application of problem solving, application development,
          AI exploration, database integration, API development, user-focused solution design,
          collaboration, documentation and iterative improvement.
        </p>

        <div className="project-matrix" aria-label="Project development outcomes matrix">
          <div className="matrix-header">
            <span>Project</span>
            <span>Demonstrated Development</span>
          </div>

          {projectMatrix.map(({ project, outcome }) => (
            <div className="matrix-row" key={project}>
              <span className="matrix-project">{project}</span>
              <span className="matrix-arrow" aria-hidden="true">→</span>
              <span className="matrix-outcome">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="capaciti-outcomes">
        <div className="section-header compact-header">
          <p className="eyebrow">CAPACITI</p>
          <h3>CAPACITI Development Outcomes</h3>
        </div>

        <p className="capaciti-outcomes-copy">
          “Through my development journey and participation in CAPACITI, I am working toward strengthening both technical capability and professional workplace readiness.”
        </p>

        <div className="capaciti-columns">
          {capacitiColumns.map(({ title, items }) => (
            <div className="capaciti-column" key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="evidence-section">
        <div className="section-header compact-header">
          <p className="eyebrow">Evidence</p>
          <h3>Evidence of Progress</h3>
        </div>

        <div className="evidence-grid">
          {evidenceCards.map(({ number, title, description, link, label }) => (
            <div className="evidence-card" key={title}>
              <span className="evidence-number">{number}</span>
              <h4>{title}</h4>
              <p>{description}</p>
              {link ? (
                <a href={link} aria-label={`${title} link`}>
                  {label}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="future-metrics">
        <div className="section-header compact-header">
          <p className="eyebrow">Planning</p>
          <h3>Future Metrics</h3>
        </div>

        <p className="future-metrics-copy">
          Additional measurable indicators can be added as project data becomes available.
        </p>

        <div className="metric-placeholders" aria-label="Future metric placeholders">
          {futureMetrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>

      <div className="outcome-highlight" aria-label="Learning to evidence statement">
        <div className="highlight-header">
          <span className="highlight-label">From Learning to Evidence</span>
        </div>

        <p>
          “My goal is to turn learning into practical evidence through projects, documentation,
          experimentation, collaboration and continuous improvement.”
        </p>

        <div className="highlight-flow" aria-label="Learning progression">
          {improvementSteps.map((step, index) => (
            <div className="highlight-step" key={step}>
              <span>{step}</span>
              {index < improvementSteps.length - 1 ? <span className="flow-arrow" aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Outcomes
