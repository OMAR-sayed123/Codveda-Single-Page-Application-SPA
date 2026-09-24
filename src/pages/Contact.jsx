import { useState } from 'react'
import Button from '../components/Button'
import { useAppContext } from '../context/AppContext'

export default function Contact() {
  const { hasSubmittedContact, setHasSubmittedContact } = useAppContext()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please tell us your name.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'A little context helps us prepare.'
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setHasSubmittedContact(true)
  }

  return (
    <section className="contact-page container"><div className="contact-intro"><p className="eyebrow">Start a conversation</p><h1>Tell us about<br /><em>what's next.</em></h1><p>Have a project, a question, or just a half-formed idea? We would love to hear it. No pitch deck required.</p><div className="contact-details"><div><span className="footer-label">Email</span><a href="mailto:hello@northstar.studio">hello@northstar.studio</a></div><div><span className="footer-label">Studio hours</span><p>Mon–Fri / 9am–6pm EST</p></div></div></div><div className="contact-form-wrap">{hasSubmittedContact ? <div className="success-message"><span className="success-icon">✓</span><p className="eyebrow">Message received</p><h2>Thanks, {form.name.split(' ')[0]}.</h2><p>We will be in touch within two business days. Good things are already in motion.</p><Button to="/">Back to home</Button></div> : <form className="contact-form" onSubmit={handleSubmit} noValidate><div className="field-row"><div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={updateField} placeholder="Jane Smith" aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</div><div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="jane@company.com" aria-invalid={Boolean(errors.email)} />{errors.email && <small>{errors.email}</small>}</div></div><div className="form-field"><label htmlFor="message">Tell us a little more</label><textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="What are you working on?" rows="6" aria-invalid={Boolean(errors.message)}></textarea>{errors.message && <small>{errors.message}</small>}</div><Button type="submit">Send message</Button></form>}</div></section>
  )
}
