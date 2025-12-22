import { useEffect, useRef } from 'react'
import "./About.scss";

const About = () => {
  const contentRef = useRef(null)

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

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Hands-on Projects" },
    { number: "10+", label: "Clients Worked With" },
    { number: "10+", label: "Core Technologies" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about__content" ref={contentRef}>
          <div className="about__image">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <img
                  src="/assets/images/coffee-img.jpg"
                  alt="Coffee"
                  className="about__profile-image"
                />
              </div>
            </div>
          </div>

          <div className="about__text">
            <h3>Full stack developer based in Nova Scotia</h3>
            <p>
     With experience across development and testing, I build and maintain digital products that balance  reliability and performance. I focus on user first solutions and systematic end to end experiences.
            </p>
            <p>
         Each week, I run a Coding & Coffee session where developers come together to work through real world problems in a relaxed, supportive setting. The sessions often evolve into hands on coding, code reviews, architectural discussions, and open, constructive feedback.
            </p>
            <p>
              I've worked across projects through academic programs, client
              work, and personal development ranging from quick prototypes to
              fully deployed applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while reading about the latest trends in web development.
            </p>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/assets/docs/resume.pdf"
              className="btn btn-primary"
              download="Christopher_Britten_Resume.pdf"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
