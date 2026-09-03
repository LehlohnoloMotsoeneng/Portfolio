import { useState } from 'react'
import { useForm } from '@formspree/react'
import { siteConfig } from '../data/siteConfig'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const createGmailComposeUrl = ({ recipient, subject = '', body = '' }) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: recipient,
    subject,
    body,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

const Contact = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [state, handleFormspreeSubmit, resetForm] = useForm('mwlkbpkz')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    handleFormspreeSubmit(event)
  }

  const handleSendAnotherMessage = () => {
    resetForm()
    setFormData(initialForm)
    setErrors({})
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header contact-header">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s Connect</h2>
        <p className="section-subtitle">
          I&apos;m always interested in connecting with people, discussing technology and exploring opportunities to learn, collaborate and contribute.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-card contact-panel">
          <div className="contact-card-header">
            <p className="eyebrow">Connect</p>
            <h3>Have a project, opportunity or idea?</h3>
          </div>

          <p className="contact-intro">Let&apos;s connect and build something meaningful.</p>

          <div className="contact-links" aria-label="Contact methods">
            <a
              href={createGmailComposeUrl({ recipient: siteConfig.email })}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">{siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.github}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{siteConfig.github}</span>
            </a>

            <a
              href={siteConfig.linkedin || '#'}
              className={`contact-link ${siteConfig.linkedin ? '' : 'disabled'}`}
              aria-disabled={!siteConfig.linkedin}
              onClick={(event) => {
                if (!siteConfig.linkedin) {
                  event.preventDefault()
                }
              }}
              target={siteConfig.linkedin ? '_blank' : undefined}
              rel={siteConfig.linkedin ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{siteConfig.linkedin || '[ADD LINKEDIN URL]'}</span>
            </a>
          </div>

          <div className="contact-actions">
            <a
              href={createGmailComposeUrl({ recipient: siteConfig.email })}
              className="button primary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
            <a
              href={siteConfig.github}
              className="button secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin || '#'}
              className={`button secondary-button ${siteConfig.linkedin ? '' : 'disabled-link'}`}
              aria-disabled={!siteConfig.linkedin}
              onClick={(event) => {
                if (!siteConfig.linkedin) {
                  event.preventDefault()
                }
              }}
              target={siteConfig.linkedin ? '_blank' : undefined}
              rel={siteConfig.linkedin ? 'noopener noreferrer' : undefined}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={state.submitting}>
          <div className="field-row">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Your name"
              />
              {errors.name ? <span id="name-error" className="field-error">{errors.name}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="your@email.com"
              />
              {errors.email ? <span id="email-error" className="field-error">{errors.email}</span> : null}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              placeholder="Project opportunity"
            />
            {errors.subject ? <span id="subject-error" className="field-error">{errors.subject}</span> : null}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me a little about your idea or opportunity..."
            />
            {errors.message ? <span id="message-error" className="field-error">{errors.message}</span> : null}
          </div>

          <button type="submit" className="button primary-button form-submit" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {state.succeeded ? (
            <div className="form-notice" role="status" aria-live="polite">
              <p>Message sent successfully. Thank you for reaching out — I&apos;ll get back to you as soon as possible.</p>
              <button type="button" className="button secondary-button" onClick={handleSendAnotherMessage}>
                Send another message
              </button>
            </div>
          ) : null}

          {state.errors ? (
            <p className="form-notice" role="alert" aria-live="assertive">
              Something went wrong while sending your message. Please try again or contact me directly by email.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
