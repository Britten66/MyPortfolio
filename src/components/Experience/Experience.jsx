import './Experience.scss'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Built responsive web applications using React and Node.js',
        'Optimized database queries improving performance by 40%',
        'Collaborated with design team to implement pixel-perfect UIs',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Developed and maintained client websites using modern frameworks',
        'Participated in agile sprints and daily standups',
        'Created reusable component libraries for faster development',
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
