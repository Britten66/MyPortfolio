import { useEffect, useRef, useState } from 'react'
import './Skills.scss'

const Skills = () => {
  const categoriesRef = useRef([])
  const [selectedSkill, setSelectedSkill] = useState(null)

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

    categoriesRef.current.forEach((category) => {
      if (category) observer.observe(category)
    })

    return () => observer.disconnect()
  }, [])

  const closeModal = () => {
    setSelectedSkill(null)
    document.body.style.overflow = 'unset'
  }

  const openModal = (skill) => {
    setSelectedSkill(skill)
    document.body.style.overflow = 'hidden'
  }

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java', icon: 'fab fa-java', learning: false, description: 'My foundation for building robust test automation frameworks and backend services throughout my QA and development career.' },
        { name: 'Python', icon: 'fab fa-python', learning: false, description: 'Started with scripting and automation tasks, then expanded to data processing and building custom testing utilities.' },
        { name: 'JavaScript', icon: 'fab fa-js', learning: false, description: 'Evolved from basic DOM manipulation to building full-featured React applications and interactive portfolio projects.' },
        { name: 'TypeScript', icon: 'fab fa-js-square', learning: true, description: 'Currently learning to bring type safety to my JavaScript projects and improve code quality in larger applications.' },
        { name: 'Bash', icon: 'fas fa-terminal', learning: false, description: 'Use daily for automating repetitive tasks, managing build pipelines, and streamlining development workflows.' },
        { name: 'SQL', icon: 'fas fa-database', learning: false, description: 'Applied across projects for database design, complex queries, and validating data integrity in testing scenarios.' },
      ],
    },
    {
      title: 'Testing & Automation',
      icon: 'fas fa-vial',
      skills: [
        { name: 'Selenium WebDriver', icon: 'fas fa-robot', learning: false, description: 'Built comprehensive test suites for web applications, mastering cross-browser testing and dynamic element handling.' },
        { name: 'Cucumber', icon: 'fas fa-check-circle', learning: false, description: 'Used to bridge technical and non-technical teams by writing readable BDD scenarios that serve as living documentation.' },
        { name: 'REST Assured', icon: 'fas fa-plug', learning: false, description: 'Developed API test frameworks to validate endpoints, ensuring backend reliability before frontend integration.' },
        { name: 'TestNG', icon: 'fas fa-flask', learning: false, description: 'Organized and executed large-scale test suites with parallel execution, data providers, and detailed reporting.' },
        { name: 'JUnit', icon: 'fas fa-bug', learning: false, description: 'Applied TDD practices in Java projects, writing unit tests that catch bugs early and improve code confidence.' },
        { name: 'Postman', icon: 'fas fa-paper-plane', learning: false, description: 'My go-to tool for rapid API exploration, documentation, and creating automated test collections.' },
      ],
    },
    {
      title: 'Full Stack Development',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'React', icon: 'fab fa-react', learning: false, description: 'Built multiple projects from simple SPAs to complex dashboards, mastering hooks, state management, and component design.' },
        { name: 'Node.js', icon: 'fab fa-node-js', learning: false, description: 'Created backend APIs and services, handling authentication, database operations, and real-time features.' },
        { name: 'REST APIs', icon: 'fas fa-plug', learning: false, description: 'Designed and consumed APIs across projects, understanding best practices for endpoints, versioning, and documentation.' },
        { name: 'CSS', icon: 'fab fa-css3-alt', learning: false, description: 'Progressed from basic styling to advanced layouts with Flexbox, Grid, and responsive design patterns.' },
        { name: 'PostgreSQL', icon: 'fas fa-database', learning: false, description: 'Designed relational schemas, optimized queries, and implemented data persistence for full-stack applications.' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', learning: false, description: 'Leveraged for rapid prototyping and responsive designs, customizing components to match project requirements.' },
      ],
    },
    {
      title: 'DevOps & CI/CD',
      icon: 'fas fa-cogs',
      skills: [
        { name: 'Git / GitHub', icon: 'fab fa-git-alt', learning: false, description: 'Essential to my daily workflow for version control, collaboration, code reviews, and managing project history.' },
        { name: 'Jenkins', icon: 'fas fa-server', learning: false, description: 'Set up CI/CD pipelines to automate builds, run test suites, and deploy applications with confidence.' },
        { name: 'Maven', icon: 'fas fa-cube', learning: false, description: 'Managed Java project dependencies and builds, ensuring consistent environments across development and production.' },
        { name: 'Jira', icon: 'fab fa-jira', learning: false, description: 'Tracked issues, managed sprints, and coordinated with teams using agile methodologies throughout projects.' },
        { name: 'IntelliJ IDEA', icon: 'fas fa-brain', learning: false, description: 'My preferred IDE for Java development, utilizing debugging tools, refactoring features, and productivity shortcuts.' },
        { name: 'VS Code', icon: 'fas fa-file-code', learning: false, description: 'Daily driver for web development and scripting, customized with extensions for maximum productivity.' },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skills__category"
              ref={(el) => (categoriesRef.current[index] = el)}
            >
              <div className="skills__category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-item"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(skill)
                    }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                    {skill.learning && <span className="learning-badge">Learning</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <div
          className="skill-modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
        >
          <div className="skill-modal">
            <button
              className="skill-modal__close"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="skill-modal__header">
              <i className={selectedSkill.icon}></i>
              <h3>{selectedSkill.name}</h3>
              {selectedSkill.learning && <span className="learning-badge">Learning</span>}
            </div>
            <div className="skill-modal__content">
              <p>{selectedSkill.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills
