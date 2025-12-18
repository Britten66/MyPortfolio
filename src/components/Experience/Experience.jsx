import './Experience.scss'

const Experience = () => {
  const experiences = [
    {
      title: 'SDET (Software Development Engineer in Test)',
      company: 'QA & Automation Team',
      location: 'Canada',
      period: '2020 - 2022',
      description: [
        'Built and executed automated test scenarios using Cucumber and Gherkin syntax',
        'Validated backend data integrity through complex SQL queries',
        'Collaborated with development teams to identify, reproduce, and resolve defects',
        'Applied BDD practices ensuring requirements aligned with business behavior',
        'Strengthened release quality through comprehensive regression and integration testing',
      ],
    },
    {
      title: 'Full Stack Software Developer',
      company: 'Freelance / Contract',
      location: 'Remote, Canada',
      period: '2022 - 2024',
      description: [
        'Developed backend logic and data-driven features using Java and SQL',
        'Built and integrated RESTful APIs with structured data flows',
        'Implemented clean, maintainable code following industry best practices',
        'Debugged and resolved issues across full application stack (frontend, backend, database)',
      ],
    },
    {
      title: 'Full Stack Development Program',
      company: 'Software Development Institute',
      location: 'Canada',
      period: 'April 2025 - Present',
      description: [
        'Advanced Java development (OOP, collections, exception handling)',
        'Database design and SQL optimization (queries, joins, data validation)',
        'Test automation frameworks and QA methodologies',
        'Software architecture, version control with Git, and Agile practices',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <h3>{exp.title}</h3>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <div className="experience__company">
                  <i className="fas fa-building"></i>
                  {exp.company}
                  <span className="experience__location">
                    <i className="fas fa-map-marker-alt"></i>
                    {exp.location}
                  </span>
                </div>
                <ul className="experience__description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
