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
        "Completing comprehensive full stack software development program focused on building production ready web applications through project based learning and collaborative development",
        "Developing full stack applications using React, Node.js, JavaScript, and Java with emphasis on RESTful API integration, SQL database design, and responsive front end implementation",
        "Building and contributing to collaborative web applications in team environments by implementing modern React patterns including component architecture, state management, and client side routing",
        "Writing unit and integration tests using modern testing frameworks to ensure application reliability, maintainability, and scalability",
        "Applying test driven development (TDD) principles and structured testing practices as part of team based workflows",
        "Practicing Agile development methodologies and Git based version control including feature branching, pull requests, and code reviews in environments modeled after professional software teams",
      ],
    },
    {
      title: "Web Developer (Contract)",
      company: "Breton SmarTek - FireQ Emergency Management Software",
      location: "Nova Scotia",
      period: "Dec 2025 - Present",
      description: [
        "Developed and maintained production WordPress sites for emergency management and healthcare software products while working independently in a fully remote environment using Trello for task tracking and deliverable coordination",
        "Built custom interactive components including carousels, modal popups, responsive grid systems, and subscription pricing cards using HTML, CSS, and JavaScript within WordPress and Elementor to extend beyond default theme capabilities and meet specific product requirements",
        "Wrote custom CSS for responsive layouts and JavaScript for interactive functionality to ensure optimal user experience across different screen sizes and browsers",
        "Implemented SSL certificates for secure connections, repaired broken internal links, and integrated app store download CTAs to improve site reliability and conversion flow",
        "Debugged and resolved cross browser compatibility and responsive layout issues using Chrome DevTools to ensure consistent behavior and performance across mobile and desktop environments",
      ],
    },
    {
      title: "Program Support / Data Administrator (Federal Government)",
      company: "Immigration, Refugees and Citizenship Canada",
      location: "Canada",
      period: "Sept 2023 - May 2024",
      description: [
        "Supported federal immigration case processing operations by managing applicant data in the Global Case Management System (GCMS) to ensure data accuracy and regulatory compliance for citizenship and immigration programs",
        "Processed and validated applicant information within GCMS while maintaining data integrity standards required for federal compliance audits and program reporting",
        "Identified data entry errors and processing inconsistencies then escalated issues to program officers and collaborated with teams to refine validation workflows and reduce error rates",
        "Managed sensitive personal information including citizenship applications, biographical data, and supporting documentation under strict privacy protocols aligned with federal security standards",
        "Coordinated with multiple departmental teams to ensure timely case progression and accurate documentation across immigration program streams",
      ],
    },
    {
      title: "SDET (Automation Tester)",
      company: "Per Fleet",
      location: "Remote",
      period: "Jan 2021 - Aug 2023",
      description: [
        "Contributed to automated testing efforts for fleet management software under contract engagement while executing test strategies and supporting quality assurance across multiple release cycles in a collaborative development environment with on site training involvement",
        "Built custom test automation framework from scratch using Maven for dependency management, Selenium WebDriver for browser automation, and Cucumber BDD for behavior driven test scenarios to reduce manual regression testing time and support software delivery timelines",
        "Developed and maintained automated test scripts in Java to validate fleet tracking features, user authentication flows, real time GPS data synchronization, and cross platform functionality across web and mobile interfaces under senior SDET guidance",
        "Configured Maven project structure and managed build lifecycles to ensure consistent test execution and dependency resolution across development, staging, and production environments for team collaboration",
        "Identified, documented, and tracked software defects using Jira by including detailed reproduction steps and severity classifications then collaborated with development teams to prioritize fixes and verify resolutions before production deployment",
        "Participated in sprint planning sessions and daily standups to provide QA perspective on feature testability, risk assessment, and quality gates for release readiness",
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
