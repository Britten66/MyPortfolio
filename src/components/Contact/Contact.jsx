import { useState } from 'react'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      href: 'https://linkedin.com',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__content">
          <div className="contact__info">
            <h3>Let's talk about everything!</h3>
            <p>
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'm always open to discussing new projects, creative
              ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact__details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__detail">
                  <div className="contact__detail-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact__detail-text">
                    <span className="label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
