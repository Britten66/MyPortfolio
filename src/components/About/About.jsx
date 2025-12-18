import './About.scss'

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about__content">
          <div className="about__image">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>

          <div className="about__text">
            <h3>A passionate developer based in Your City</h3>
            <p>
              I'm a full-stack developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With a background
              in both design and development, I bring a unique perspective to every
              project I work on.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee
              while reading about the latest trends in web development.
            </p>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
