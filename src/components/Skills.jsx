const skillGroups = [
  {
    title: 'Programming',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Development',
    items: ['Spring Boot', 'React', 'Node.js', 'REST APIs'],
  },
  {
    title: 'AI & Data',
    items: ['Generative AI', 'Prompt Engineering', 'Natural Language Processing', 'Sentiment Analysis', 'Machine Learning'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Supabase'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Figma'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header skill-header">
        <p className="eyebrow">Skills</p>
        <h2>Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build software and explore AI solutions.
        </p>
      </div>

      <div className="skills-summary" aria-label="Skill summary">
        <div className="summary-group">
          <span className="summary-label">Building with:</span>
          <span className="summary-list">Java • React • Spring Boot • Python • AI • SQL</span>
        </div>
        <div className="summary-group">
          <span className="summary-label">Exploring:</span>
          <span className="summary-list">Generative AI • NLP • Machine Learning • IoT</span>
        </div>
      </div>

      <div className="skills-grid-categories">
        {skillGroups.map(({ title, items }) => (
          <div className="skill-group" key={title}>
            <h3>{title}</h3>
            <ul className="skill-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
