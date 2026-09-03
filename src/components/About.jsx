import { BookOpen, BrainCircuit, Code2 } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

const highlightCards = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Building practical applications using modern programming languages, frameworks, APIs and databases.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Emerging Technology',
    description:
      'Exploring artificial intelligence, generative AI, natural language processing and IoT to understand how emerging technologies can solve real-world problems.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Continuously developing technical and professional capabilities through projects, experimentation, collaboration and reflection.',
  },
]

const processSteps = [
  { number: '01', title: 'Understand', description: 'Understand the problem, requirements and users.' },
  { number: '02', title: 'Design', description: 'Plan the solution, architecture and user experience.' },
  { number: '03', title: 'Build', description: 'Develop, integrate, test and iterate.' },
  { number: '04', title: 'Improve', description: 'Use feedback, testing and reflection to improve the solution.' },
]

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <p className="eyebrow">About Me</p>
        <h2>Software Developer | AI &amp; IoT Enthusiast</h2>
      </div>

      <div className="about-intro-grid">
        <div className="about-photo-panel" aria-label="Profile image section">
          <div className="about-photo-frame">
            <img
              src={profilePhoto}
              alt="Portrait of Lehlohonolo Motsoeneng"
              className="about-photo"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.parentElement.classList.add('about-photo-fallback-visible')
              }}
            />
            <span className="about-photo-fallback" aria-hidden="true">LM</span>
          </div>
        </div>

        <div className="about-intro">
          <p className="lead">
            I am a software developer passionate about building practical technology
            solutions and exploring emerging technologies such as artificial
            intelligence and IoT. I enjoy turning ideas and real-world problems into
            functional software through thoughtful design, development, testing and
            continuous improvement.
          </p>

          <p className="about-copy">
            I approach development by first understanding the problem and
            requirements, then designing, building, testing and refining a solution.
            I value continuous learning, collaboration and feedback because they help
            me become a better developer.
          </p>
        </div>

        <div className="about-panel">
          <h3>What I focus on</h3>
          <ul className="focus-list">
            <li>Software development</li>
            <li>Artificial intelligence</li>
            <li>IoT</li>
            <li>Full-stack development</li>
            <li>Problem solving</li>
            <li>Practical technology solutions</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </div>

      <div className="about-cards">
        {highlightCards.map(({ icon: Icon, title, description }) => (
          <article className="about-card" key={title}>
            <div className="about-card-icon" aria-hidden="true">
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="approach-block">
        <div className="approach-header">
          <p className="eyebrow">Approach</p>
          <h3>My Development Approach</h3>
        </div>

        <div className="approach-steps" aria-label="Development process">
          {processSteps.map(({ number, title, description }) => (
            <div className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <div className="process-content">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
