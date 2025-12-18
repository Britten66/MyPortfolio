import './Hero.scss'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting animate-fadeInDown">Hello, I'm</p>
          <h1 className="hero__name animate-fadeInUp delay-1">
            Your <span>Name</span>
          </h1>
          <h2 className="hero__title animate-fadeInUp delay-2">
            <span className="typing-text">Full Stack Developer</span>
          </h2>
          <p className="hero__description animate-fadeInUp delay-3">
            I build exceptional digital experiences that are fast, accessible,
            and visually stunning. Passionate about turning complex problems
            into simple, beautiful solutions.
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero__visual animate-fadeInRight delay-2">
          <div className="hero__image-wrapper">
            <div className="hero__image-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <div className="hero__decoration hero__decoration--1"></div>
            <div className="hero__decoration hero__decoration--2"></div>
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
