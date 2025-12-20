import './Projects.scss'

const Projects = () => {
  const projects = [
    {
      title: 'S2 Sprint Final',
      description: 'Final semester project demonstrating full-stack development skills and best practices.',
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
      description: 'A React application that fetches data from the Rest Countries API and displays neighboring countries filtered by first-letter criteria.',
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
      description: 'A basic app to practice React and implement JavaScript ideologies, focusing on modern development patterns.',
      image: null,
      tags: ['React', 'JavaScript', 'Frontend'],
      liveUrl: 'https://studentappformeetings.netlify.app/',
      githubUrl: 'https://github.com/Britten66/student_enviroment',
      metrics: [
        { icon: 'fas fa-cogs', label: 'Patterns', value: 'Modern JS' },
        { icon: 'fas fa-atom', label: 'Hooks', value: 'React' },
        { icon: 'fas fa-laptop-code', label: 'Focus', value: 'Frontend' },
      ],
    },
    {
      title: 'HAB Taxi Service',
      description: 'A Python program for managing taxi service operations, developed as a comprehensive final sprint project.',
      image: null,
      tags: ['Python', 'CLI', 'Backend'],
      liveUrl: null,
      githubUrl: 'https://github.com/Britten66/HAB_TAXI_SERVICE',
      metrics: [
        { icon: 'fas fa-terminal', label: 'Interface', value: 'CLI' },
        { icon: 'fas fa-file-code', label: 'Storage', value: 'File-based' },
        { icon: 'fas fa-cube', label: 'Paradigm', value: 'OOP' },
      ],
    // },
    // {
    //   title: '100 Days of Code',
    //   description: '100 days of coding every day for at least 1 hour, focusing on frontend development with real-world projects.',
    //   image: null,
    //   tags: ['JavaScript', 'HTML', 'CSS'],
    //   liveUrl: 'https://britten66.github.io/100-Days-Coding/',
    //   githubUrl: 'https://github.com/Britten66/100-Days-Coding',
    //   metrics: [
    //     { icon: 'fas fa-calendar-check', label: 'Duration', value: '100 Days' },
    //     { icon: 'fas fa-folder-open', label: 'Output', value: '100+ Projects' },
    //     { icon: 'fas fa-palette', label: 'Focus', value: 'Frontend' },
    //   ],
    // },
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects__grid">
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
