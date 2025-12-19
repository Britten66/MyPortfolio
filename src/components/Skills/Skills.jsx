import './Skills.scss'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'TypeScript', icon: 'fas fa-code' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3/SCSS', icon: 'fab fa-css3-alt' },
      ],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Express', icon: 'fas fa-cube' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-leaf' },
      ],
    },
    {
      title: 'Testing & QA',
      icon: 'fas fa-vial',
      skills: [
        { name: 'Selenium', icon: 'fas fa-robot' },
        { name: 'Jest', icon: 'fas fa-check-circle' },
        { name: 'JUnit', icon: 'fas fa-flask' },
        { name: 'Cypress', icon: 'fas fa-bug' },
        { name: 'API Testing', icon: 'fas fa-plug' },
        { name: 'Test Automation', icon: 'fas fa-cogs' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Jenkins', icon: 'fas fa-project-diagram' },
        { name: 'CI/CD', icon: 'fas fa-sync-alt' },
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
            <div key={index} className="skills__category">
              <div className="skills__category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
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
