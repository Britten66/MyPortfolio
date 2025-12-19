import './Hero.scss'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting animate-fadeInDown">Hello, I'm</p>
          <h1 className="hero__name animate-fadeInUp delay-1">
            Christopher <span>Britten</span>
          </h1>
          <h2 className="hero__title animate-fadeInUp delay-2">
            <span className="typing-text">Full Stack Developer</span>
          </h2>
          <p className="hero__location animate-fadeInUp delay-2-5">
            <i className="fas fa-map-marker-alt"></i> Nova Scotia, Canada
          </p>
          <p className="hero__description animate-fadeInUp delay-3">
            I build scalable products that are fast, accessible,
            and dynamic. Passionate about turning complex problems
            into simple, effective solutions.
          </p>
          <div className="hero__buttons animate-fadeInUp delay-4">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
          </div>
          <div className="hero__socials animate-fadeInUp delay-5">
            <a href="https://github.com/Britten66" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/christopher-britten/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="hero__visual animate-fadeInRight delay-2">
          <div className="hero__image-wrapper">
            <div className="hero__image-placeholder">
              <img
                src="/assets/images/imageofme.jpg"
                alt="Christopher Britten"
                className="hero__profile-image"
              />
            </div>
            <div className="hero__decoration hero__decoration--1"></div>
            <div className="hero__decoration hero__decoration--2"></div>

            <a href="#experience" className="hero__floating-stat hero__floating-stat--1">
              <div className="stat-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="stat-content">
                <span className="stat-value">+3 Years</span>
                <span className="stat-label">Experience</span>
              </div>
            </a>

            <a href="#projects" className="hero__floating-stat hero__floating-stat--2">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-content">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects</span>
              </div>
            </a>

            <div className="hero__floating-stat hero__floating-stat--3">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}

export default Hero
