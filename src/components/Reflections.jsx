import {
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  MessageSquareText,
  RefreshCcw,
  Users,
  Workflow,
} from 'lucide-react'

const reflectionCards = [
  {
    title: 'Learning Through Building',
    reflection:
      'Working on practical projects has helped me understand that developing software involves much more than writing code. I have learned the importance of understanding requirements, planning a solution, testing ideas and improving the implementation based on what I discover.',
    lesson: 'Build → Test → Learn → Improve',
    icon: BookOpenText,
  },
  {
    title: 'Problem Solving',
    reflection:
      'Development challenges have taught me to approach problems systematically. Instead of immediately changing code, I have learned to investigate the cause, break the problem into smaller parts, test possible solutions and use documentation and debugging tools to guide the process.',
    lesson: 'Understand → Investigate → Test → Solve',
    icon: Bug,
  },
  {
    title: 'Learning AI',
    reflection:
      'Exploring artificial intelligence has expanded the way I think about software development. AI projects have helped me understand how software can interact with natural language, generate content, analyse information and provide intelligent assistance.',
    lesson: 'Technology should support a meaningful problem.',
    icon: BrainCircuit,
  },
  {
    title: 'Collaboration',
    reflection:
      'Collaborative projects have shown me the importance of communication, shared responsibility, version control and understanding how individual contributions fit into a larger system.',
    lesson: 'Good software is often built through effective teamwork.',
    icon: Users,
  },
  {
    title: 'Feedback & Iteration',
    reflection:
      'Feedback has helped me recognise areas where an implementation can be improved. I have learned to treat feedback as part of the development process rather than as criticism, using it to refine both technical work and professional communication.',
    lesson: 'Feedback → Reflection → Improvement',
    icon: RefreshCcw,
  },
  {
    title: 'Industry Readiness',
    reflection:
      'My development journey has shown me that technical ability is only one part of becoming a professional developer. Communication, accountability, teamwork, adaptability and continuous learning are equally important.',
    lesson: 'Technical skills + Professional skills = Industry readiness',
    icon: BriefcaseBusiness,
  },
]

const documentationSteps = [
  {
    title: 'Problem',
    description: 'Define the problem and why it matters.',
  },
  {
    title: 'Research',
    description: 'Understand the context, users, technologies and possible approaches.',
  },
  {
    title: 'Design',
    description: 'Plan the architecture, interface, data flow and solution.',
  },
  {
    title: 'Development',
    description: 'Build, integrate and test the solution.',
  },
  {
    title: 'Evaluation',
    description: 'Assess what worked, what did not work and what could be improved.',
  },
  {
    title: 'Reflection',
    description: 'Document lessons learned and future improvements.',
  },
]

const templateFields = [
  'PROJECT',
  'Problem',
  'Objective',
  'Approach',
  'Technology',
  'Implementation',
  'Challenges',
  'Testing',
  'Results',
  'Lessons Learned',
  'Future Improvements',
]

const Reflections = () => {
  return (
    <section id="reflections" className="section reflections-section">
      <div className="section-header">
        <p className="eyebrow">Reflections</p>
        <h2>Reflections</h2>
        <p className="section-subtitle">
          What I learned from building, experimenting, collaborating and continuously improving.
        </p>
      </div>

      <div className="reflection-intro">
        <p>
          Software development is an iterative process involving learning, experimentation,
          problem solving, debugging, feedback, collaboration and improvement. I am still developing
          my skills, and each project has helped me become more thoughtful, adaptable and confident
          in how I approach building software.
        </p>
      </div>

      <div className="reflection-grid">
        {reflectionCards.map(({ title, reflection, lesson, icon: Icon }) => (
          <article className="reflection-card" key={title}>
            <div className="reflection-card-header">
              <span className="reflection-number" aria-hidden="true">
                {title.charAt(0).toUpperCase()}
              </span>
              <div className="reflection-icon" aria-hidden="true">
                <Icon size={18} />
              </div>
            </div>

            <h3>{title}</h3>
            <p>{reflection}</p>

            <div className="reflection-lesson">
              <span className="lesson-label">Key lesson:</span>
              <strong>{lesson}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="reflection-callout" aria-label="Personal development statement">
        <MessageSquareText size={20} className="callout-icon" aria-hidden="true" />
        <p>
          “Every project is an opportunity to learn something new, improve the way I approach
          problems and become a better developer.”
        </p>
      </div>

      <div className="documentation-section">
        <div className="section-header compact-header">
          <p className="eyebrow">Documentation</p>
          <h3>How I Document My Work</h3>
        </div>

        <p className="documentation-intro">
          Good project documentation helps communicate what problem was being solved, why the
          solution was chosen, how it was developed, what technologies were used, the challenges
          encountered, testing performed, results, lessons learned and future improvements.
        </p>

        <div className="documentation-workflow" aria-label="Project documentation workflow">
          {documentationSteps.map(({ title, description }, index) => (
            <div className="workflow-step" key={title}>
              <span className="workflow-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="workflow-content">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="documentation-template" aria-label="Project documentation template">
          <div className="template-heading-row">
            <div className="template-badge">
              <Workflow size={16} aria-hidden="true" />
              <span>Project</span>
            </div>
            <h4>Documentation Template</h4>
          </div>

          <div className="template-grid">
            {templateFields.map((field) => (
              <div className="template-item" key={field}>
                <span>{field}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="capaciti-learning-panel">
        <div className="connection-icon" aria-hidden="true">
          <BriefcaseBusiness size={18} />
        </div>
        <div>
          <p className="eyebrow">Learning Through CAPACITI</p>
          <p className="connection-copy">
            CAPACITI has reinforced the importance of connecting technical development with
            professional behaviour. The experience has encouraged me to think beyond simply
            completing a task and to consider communication, collaboration, accountability, quality
            and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reflections
