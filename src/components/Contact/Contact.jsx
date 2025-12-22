import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'

const Contact = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        to_name: 'Christopher',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Oops! Something went wrong. Please try again or email me directly at britten63@hotmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'britten63@hotmail.com',
      href: 'mailto:britten63@hotmail.com',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Cape Breton, Nova Scotia',
      href: null,
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/christopher-britten',
      href: 'https://www.linkedin.com/in/christopher-britten/',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__content" ref={contentRef}>
          <div className="contact__info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities,
              collaborations, or just having a conversation about technology
              and innovation. Whether you have a project in mind or want to
              connect, feel free to reach out.
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
                      <a
                        href={info.href}
                        target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={info.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      >
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
              <a href="https://github.com/Britten66" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/christopher-britten/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
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
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"

                  value={formData.email}
                  onChange={handleChange}
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
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <i className="fas fa-paper-plane"></i>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
