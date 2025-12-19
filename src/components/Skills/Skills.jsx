import { useEffect, useRef } from 'react'
import './Skills.scss'

const Skills = () => {
  const categoriesRef = useRef([])

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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java', icon: 'fab fa-java', learning: false },
        { name: 'Python', icon: 'fab fa-python', learning: false },
        { name: 'JavaScript', icon: 'fab fa-js', learning: false },
        { name: 'TypeScript', icon: 'fab fa-js-square', learning: true },
        { name: 'Bash', icon: 'fas fa-terminal', learning: false },
        { name: 'SQL', icon: 'fas fa-database', learning: false },
      ],
    },
    {
      title: 'Testing & Automation',
      icon: 'fas fa-vial',
      skills: [
        { name: 'Selenium WebDriver', icon: 'fas fa-robot', learning: false },
        { name: 'Cucumber', icon: 'fas fa-check-circle', learning: false },
        { name: 'REST Assured', icon: 'fas fa-plug', learning: false },
        { name: 'TestNG', icon: 'fas fa-flask', learning: false },
        { name: 'JUnit', icon: 'fas fa-bug', learning: false },
        { name: 'Postman', icon: 'fas fa-paper-plane', learning: false },
      ],
    },
    {
      title: 'Full Stack Development',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'React', icon: 'fab fa-react', learning: false },
        { name: 'Node.js', icon: 'fab fa-node-js', learning: false },
        { name: 'REST APIs', icon: 'fas fa-plug', learning: false },
        { name: 'CSS', icon: 'fab fa-css3-alt', learning: false },
        { name: 'PostgreSQL', icon: 'fas fa-database', learning: false },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', learning: false },
      ],
    },
    {
      title: 'DevOps & CI/CD',
      icon: 'fas fa-cogs',
      skills: [
        { name: 'Git / GitHub', icon: 'fab fa-git-alt', learning: false },
        { name: 'Jenkins', icon: 'fas fa-server', learning: false },
        { name: 'Maven', icon: 'fas fa-cube', learning: false },
        { name: 'Jira', icon: 'fab fa-jira', learning: false },
        { name: 'IntelliJ IDEA', icon: 'fas fa-brain', learning: false },
        { name: 'VS Code', icon: 'fas fa-file-code', learning: false },
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
                  <div key={i} className="skill-item">
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
    </section>
  )
}

export default Skills
