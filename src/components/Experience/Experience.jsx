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
        "Building full-stack applications with React, Node.js, JavaScript, and Java, focusing on RESTful APIs, SQL databases, and responsive UI design.",
        "Writing unit and integration tests using modern frameworks to ensure code quality. Practicing TDD principles in team-based workflows.",
        "Applying Agile methodologies and Git version control including feature branching, pull requests, and code reviews.",
      ],
    },
    {
      title: "Web Developer (Contract)",
      company: "Breton SmarTek - FireQ Emergency Management Software",
      location: "Nova Scotia",
      period: "Dec 2025 - Present",
      description: [
        "Develop and maintain production WordPress sites for emergency management software using custom HTML/CSS/JS components (carousels, modals, pricing cards) within Elementor.",
        "Implement SSL certificates, repair broken links, and debug cross-browser compatibility issues using Chrome DevTools.",
        "Work independently in remote environment using Trello for project tracking.",
      ],
    },
    {
      title: "Program Support / Data Administrator",
      company: "Immigration, Refugees and Citizenship Canada",
      location: "Canada",
      period: "Sept 2023 - May 2024",
      description: [
        "Managed applicant data in GCMS (Global Case Management System) for federal immigration programs, ensuring data accuracy and regulatory compliance.",
        "Validated applicant information for federal audits. Identified data entry errors and collaborated with teams to refine validation workflows.",
        "Handled sensitive personal information under strict federal privacy and security protocols.",
      ],
    },
    {
      title: "SDET (Automation Tester)",
      company: "Per Fleet",
      location: "Remote",
      period: "Jan 2021 - Aug 2023",
      description: [
        "Built test automation framework from scratch using Maven, Selenium WebDriver, and Cucumber BDD, reducing manual regression testing time.",
        "Developed automated test scripts in Java to validate fleet tracking, authentication, GPS sync, and cross-platform functionality.",
        "Tracked defects in Jira with detailed reproduction steps. Collaborated with dev teams to prioritize fixes before production deployment.",
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
