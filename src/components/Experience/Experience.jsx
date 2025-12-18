import './Experience.scss'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Software Developer Student',
      company: 'Software Development / Technology Institute',
      location: 'Canada',
      period: 'April 2025 - Present',
      description: [
        'Java (OOP, collections, exception handling)',
        'SQL (queries, joins, data validation)',
        'Test Automation & QA Foundations',
        'Software design fundamentals, Git, Agile methodologies',
      ],
    },
    {
      title: 'Full Stack Software Developer',
      company: 'Contract / Project-Based',
      location: 'Remote, Canada',
      period: '2022 - 2024',
      description: [
        'Developed backend logic and data-driven features using Java and SQL',
        'Worked with RESTful services and structured data flows',
        'Implemented clean, maintainable code following best practices',
        'Debugged issues across application layers (frontend, backend, database)',
      ],
    },
    {
      title: 'SDET Tester (Software Development Engineer in Test)',
      company: 'QA / Automation Team',
      location: 'Canada',
      period: '2020 - 2022',
      description: [
        'Built and executed automated test scenarios using Cucumber (Gherkin)',
        'Validated backend data using SQL queries',
        'Collaborated closely with developers to reproduce and resolve defects',
        'Applied BDD practices to ensure requirements matched business behavior',
        'Strengthened release quality through regression and integration testing',
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
