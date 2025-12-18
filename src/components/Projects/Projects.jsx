import './Projects.scss'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
      image: null,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop, and team features.',
      image: null,
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot powered by OpenAI API with conversation history and custom training.',
      image: null,
      tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing projects and skills with smooth animations.',
      image: null,
      tags: ['React', 'SCSS', 'Vite', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location detection, forecasts, and beautiful visualizations.',
      image: null,
      tags: ['Vue.js', 'Weather API', 'Chart.js', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social platform with authentication, posts, comments, and real-time notifications.',
      image: null,
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
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
              <div className="project-card__inner">
                <div className="project-card__front">
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
                <div className="project-card__back">
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
