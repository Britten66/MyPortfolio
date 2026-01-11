import { useEffect, useRef } from "react";
import "./About.scss";

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);
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
              Full stack developer based in Nova Scotia with experience across development and testing workflows. I focus on building maintainable, performant applications by emphasizing code quality, testing, and practical implementation from the start.
            </p>
            <p>
              I've contributed to client facing work and full stack deployments, working across front end, back end, and testing layers. I also organize Coding & Coffee, a weekly collaborative session where developers review code, discuss their code, and work through real world problems together.
            </p>
            <p>
              Outside of development, I enjoy experimenting with new technologies, a good cup of coffee, and spending time with my dog, Mako.
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
