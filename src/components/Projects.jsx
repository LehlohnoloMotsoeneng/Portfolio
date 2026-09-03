import { useEffect, useState } from 'react'
import { ArrowRight, Bot, Code2, Database, Network, Sparkles, X } from 'lucide-react'
import { projects } from '../data/projects'

const filterOptions = ['All', 'AI', 'Generative AI', 'NLP', 'Software']

const renderProjectVisual = (project) => {
  const visualConfig = {
    'content-generator': { label: 'Content Generator', icon: Sparkles },
    'sentiment-analysis': { label: 'Sentiment Analysis', icon: Database },
    'pathfinder-ai': { label: 'PathFinder AI', icon: Network },
  }

  const { label, icon: Icon } = visualConfig[project.image] || {
    label: project.title,
    icon: Code2,
  }

  return (
    <div className={`project-visual project-visual--${project.image}`}>
      <div className="project-visual-badge">{label}</div>
      <div className="project-visual-mark">
        <Icon size={34} />
      </div>
      <div className="project-visual-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((project) => project.filters.includes(selectedFilter))

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProject])

  const renderActionButton = (link, label, isDisabled = false) => {
    if (isDisabled || !link || link === '#') {
      return (
        <button type="button" className="project-link is-disabled" disabled aria-label={label}>
          {label}
        </button>
      )
    }

    return (
      <a href={link} target="_blank" rel="noreferrer" className="project-link" aria-label={label}>
        {label}
      </a>
    )
  }

  return (
    <section id="projects" className="section project-section">
      <div className="section-header project-header">
        <p className="eyebrow">Projects</p>
        <h2>Featured Projects</h2>
        <p className="section-subtitle">
          A collection of software and AI projects demonstrating my practical development
          experience, problem-solving approach and exploration of emerging technologies.
        </p>
      </div>

      <div className="project-filters" aria-label="Project filters">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-pill ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
            aria-pressed={selectedFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-showcase">
        {filteredProjects.map((project) => {
          const isFeatured = project.featured

          return (
            <article
              key={project.id}
              className={`project-card ${isFeatured ? 'featured-project' : ''}`}
            >
              {isFeatured && (
                <div className="featured-badge-group">
                  <span className="project-badge badge-featured">FLAGSHIP AI SOLUTION</span>
                  <span className="project-badge badge-team">COLLABORATIVE PROJECT</span>
                </div>
              )}

              <div className="project-card-body">
                <div className="project-main-copy">
                  <div className="project-meta-row">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.featured ? (
                    <>
                      <div className="project-detail-stack">
                        <div>
                          <h4>Problem</h4>
                          <p>{project.problem}</p>
                        </div>
                        <div>
                          <h4>Solution</h4>
                          <p>{project.solution}</p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className="project-technology-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-type-row">
                    <span>{project.type}</span>
                  </div>
                </div>

                <div className="project-card-visual">{renderProjectVisual(project)}</div>
              </div>

              {project.featured && (
                <div className="featured-details">
                  <div className="featured-section-block">
                    <h4>Team Project</h4>
                    <p>{project.teamProject}</p>
                  </div>

                  <div className="featured-section-block">
                    <h4>Collaborative Development</h4>
                    <p>{project.collaborativeDevelopment}</p>
                  </div>

                  <div className="featured-section-block">
                    <h4>My Contribution</h4>
                    <p>{project.contribution}</p>
                  </div>

                  <div className="featured-section-block">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-actions">
                <button
                  type="button"
                  className="project-link primary-link"
                  onClick={() => setSelectedProject(project)}
                >
                  View Case Study
                  <ArrowRight size={16} />
                </button>

                {renderActionButton(project.github, 'GitHub', project.github === '#')}
                {renderActionButton(project.liveDemo, 'Live Demo', project.liveDemo === '#')}
              </div>
            </article>
          )
        })}
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-study-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-category">{selectedProject.category}</span>
                <h3 id="project-case-study-title">{selectedProject.title}</h3>
              </div>

              <button
                type="button"
                className="modal-close"
                aria-label="Close case study"
                onClick={() => setSelectedProject(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-overview">
                <p>{selectedProject.detailedDescription}</p>
                <div className="modal-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-grid">
                <div className="modal-panel">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-panel">
                  <h4>Project Type</h4>
                  <p>{selectedProject.type}</p>
                </div>

                <div className="modal-panel">
                  <h4>Problem</h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="modal-panel">
                  <h4>Objective</h4>
                  <p>{selectedProject.objective}</p>
                </div>

                <div className="modal-panel">
                  <h4>Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="modal-panel">
                  <h4>My Contribution</h4>
                  <p>{selectedProject.contribution}</p>
                </div>

                <div className="modal-panel">
                  <h4>Development Process</h4>
                  <p>{selectedProject.featured ? 'Understand → Explore → Recommend → Action' : 'Understand the problem, design a solution, build and iterate with feedback.'}</p>
                </div>

                <div className="modal-panel">
                  <h4>Features</h4>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.dataset ? (
                  <div className="modal-panel">
                    <h4>Dataset</h4>
                    <p>{selectedProject.dataset}</p>
                  </div>
                ) : null}

                {selectedProject.preprocessing ? (
                  <div className="modal-panel">
                    <h4>Preprocessing</h4>
                    <p>{selectedProject.preprocessing}</p>
                  </div>
                ) : null}

                {selectedProject.model ? (
                  <div className="modal-panel">
                    <h4>Model</h4>
                    <p>{selectedProject.model}</p>
                  </div>
                ) : null}

                {selectedProject.testing ? (
                  <div className="modal-panel">
                    <h4>Testing</h4>
                    <p>{selectedProject.testing}</p>
                  </div>
                ) : null}

                <div className="modal-panel">
                  <h4>Challenges</h4>
                  <ul>
                    {selectedProject.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-panel">
                  <h4>Results</h4>
                  <ul>
                    {selectedProject.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-panel">
                  <h4>What I Learned</h4>
                  <ul>
                    {selectedProject.lessons.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-panel">
                  <h4>Future Improvements</h4>
                  <ul>
                    {selectedProject.futureImprovements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-links">
                {renderActionButton(selectedProject.github, 'GitHub', selectedProject.github === '#')}
                {renderActionButton(selectedProject.liveDemo, 'Live Demo', selectedProject.liveDemo === '#')}
              </div>
              <button type="button" className="project-link secondary-link" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
