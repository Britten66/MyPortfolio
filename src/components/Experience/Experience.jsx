import { useEffect, useRef } from 'react'
import "./Experience.scss";

const Experience = () => {
  const timelineRef = useRef(null)

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

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const experiences = [
    {
      title: "Diploma in Full Stack Software Development",
      company: "Keyin College",
      location: "Newfoundland (Remote)",
      period: "Graduating 2026",
      type: "education",
      description: [
        "Specializing in Modern Web Stack (React, Node.js)",
        "Core Technical Focus: JavaScript, Java, SQL, REST APIs",
        "Applied Learning: Test Driven Development, Agile, Git Version Control",
      ],
    },
    {
      title: "Web Developer (Contract)",
      company: "Breton SmarTek — FireQ Emergency Management Software",
      location: "Nova Scotia",
      period: "2025 - Present",
      description: [
        "Developed and maintained production WordPress sites for emergency management and healthcare software products, working independently in a fully remote environment using Trello for task tracking",
        "Built custom interactive components (carousels, modal popups, responsive grid systems, and subscription pricing cards) using WordPress, Elementor, HTML, CSS, and JavaScript beyond default theme capabilities",
        "Implemented SSL certificates, repaired broken internal links, and integrated app store download CTAs to improve site reliability and conversion flow",
        "Debugged and resolved cross-browser and responsive layout issues using Chrome DevTools, ensuring consistent behavior across mobile and desktop browsers",
      ],
    },
    {
      title: "Program Support / Data Administrator (Federal Government)",
      company: "Immigration, Refugees and Citizenship Canada",
      location: "Canada",
      period: "2022 - 2024",
      description: [
        "Managed case data within GCMS and ensured high-level data integrity for federal compliance systems",
        "Identified processing errors and collaborated with teams to improve data validation workflows",
        "Handled sensitive information under strict privacy and security protocols",
      ],
    },
    {
      title: "SDET (Automation Tester)",
      company: "Per Fleet",
      location: "Remote",
      period: "2020 - 2022",
      description: [
        "Built automated testing frameworks (Selenium/Cucumber) to accelerate software release cycles",
        "Bridged the gap between QA and Engineering, ensuring code quality before deployment",
        "Tech Stack: Selenium, Java, SQL, Jira",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>

        <div className="experience__timeline" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker">
                <i
                  className={
                    exp.type === "education"
                      ? "fas fa-graduation-cap"
                      : "fas fa-briefcase"
                  }
                ></i>
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
  );
};

export default Experience;
