import { useEffect, useRef } from 'react'
import './Projects.scss'

const Projects = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const projects = [
    {
      title: 'S2 Sprint Final',
      description: 'Full-stack capstone project built with React and Node.js. Implemented user authentication, RESTful API endpoints, PostgreSQL database design, and responsive UI with real-time data updates.',
      image: null,
      tags: ['JavaScript', 'React', 'Full-Stack'],
      liveUrl: 'https://s2-final.netlify.app/',
      githubUrl: 'https://github.com/Britten66/S2_Sprint_Final',
      metrics: [
        { icon: 'fas fa-layer-group', label: 'Architecture', value: 'Full-Stack' },
        { icon: 'fas fa-code', label: 'Framework', value: 'React' },
        { icon: 'fas fa-graduation-cap', label: 'Type', value: 'Capstone' },
      ],
    },
    {
      title: 'Countries API Explorer',
      description: 'React application integrating REST Countries API with custom filtering logic. Built dynamic search by first-letter criteria, implemented error handling for API failures, and optimized performance with debounced requests.',
      image: null,
      tags: ['React', 'JavaScript', 'REST API'],
      liveUrl: 'https://6930fae25f81be0008bcc412--s2-qap3.netlify.app/',
      githubUrl: 'https://github.com/Britten66/S2_QAP3',
      metrics: [
        { icon: 'fas fa-database', label: 'Data Source', value: 'REST API' },
        { icon: 'fas fa-filter', label: 'Features', value: 'Filtering' },
        { icon: 'fas fa-react', label: 'Built with', value: 'React' },
      ],
    },
    {
      title: 'Student Environment',
      description: 'React learning project focusing on component lifecycle, state management with useState/useEffect hooks, and conditional rendering patterns. Built CRUD operations and form validation.',
      image: null,
      tags: ['React', 'JavaScript', 'Frontend'],
      liveUrl: 'https://studentappformeetings.netlify.app/',
      githubUrl: 'https://github.com/Britten66/student-enviroment',
      metrics: [
        { icon: 'fas fa-cogs', label: 'Patterns', value: 'Modern JS' },
        { icon: 'fas fa-atom', label: 'Hooks', value: 'React' },
        { icon: 'fas fa-laptop-code', label: 'Focus', value: 'Frontend' },
      ],
    },
    {
      title: 'HAB Taxi Service',
      description: 'Python CLI application for taxi fleet management using OOP principles. Implemented driver scheduling, fare calculation with validation, and persistent file storage for business data.',
      image: null,
      tags: ['Python', 'CLI', 'Backend'],
      liveUrl: null,
      githubUrl: 'https://github.com/Britten66/HAB_TAXI_SERVICE',
      metrics: [
        { icon: 'fas fa-terminal', label: 'Interface', value: 'CLI' },
        { icon: 'fas fa-file-code', label: 'Storage', value: 'File-based' },
        { icon: 'fas fa-cube', label: 'Paradigm', value: 'OOP' },
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects__grid" ref={gridRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card__content">
                <div className="project-card__header">
                  <div className="project-card__image">
                    <i className="fas fa-folder-open"></i>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <div className="project-card__tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card__details">
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card__metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric">
                    <i className={metric.icon}></i>
                    <div className="metric-text">
                      <span className="metric-label">{metric.label}</span>
                      <span className="metric-value">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
