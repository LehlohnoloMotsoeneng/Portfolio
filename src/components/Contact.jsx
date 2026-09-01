import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitNotice, setSubmitNotice] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitNotice('')
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
      setSubmitNotice('')
      return
    }

    setErrors({})
    setSubmitNotice('Contact form submission is not connected yet. Please use the email or social links above.')
    setFormData(initialForm)
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
            <a href="mailto:Lamotsoeneng03@gmail.com" className="contact-link">
              <span className="contact-label">Email</span>
              <span className="contact-value">Lamotsoeneng03@gmail.com</span>
            </a>

            <a href="#" className="contact-link disabled" aria-disabled="true" onClick={(event) => event.preventDefault()}>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">[ADD GITHUB URL]</span>
            </a>

            <a href="#" className="contact-link disabled" aria-disabled="true" onClick={(event) => event.preventDefault()}>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">[ADD LINKEDIN URL]</span>
            </a>
          </div>

          <div className="contact-actions">
            <a href="mailto:Lamotsoeneng03@gmail.com" className="button primary-button">
              Email Me
            </a>
            <a href="#" className="button secondary-button disabled-link" aria-disabled="true" onClick={(event) => event.preventDefault()}>
              GitHub
            </a>
            <a href="#" className="button secondary-button disabled-link" aria-disabled="true" onClick={(event) => event.preventDefault()}>
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-row">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
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
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me a little about your idea or opportunity..."
            />
            {errors.message ? <span id="message-error" className="field-error">{errors.message}</span> : null}
          </div>

          <button type="submit" className="button primary-button form-submit">
            Send Message
          </button>

          {submitNotice ? <p className="form-notice" role="status">{submitNotice}</p> : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
