import React, { useState } from 'react'
import './AppointmentModal.css'

export default function AppointmentModal({ center, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', issue: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✅</div>
            <h2>Appointment Requested!</h2>
            <p>Your free appointment request has been sent to <strong>{center?.name}</strong>. They will contact you within 1–2 working days.</p>
            <p>Reference phone: <strong>{center?.phone}</strong></p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Book Free Appointment</h2>
              <p>{center?.name}</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <label>Full Name *
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
              </label>
              <label>Phone Number *
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile number" type="tel" />
              </label>
              <label>Email (optional)
                <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />
              </label>
              <label>Preferred Date *
                <input name="date" value={form.date} onChange={handleChange} required type="date" min={new Date().toISOString().split('T')[0]} />
              </label>
              <label>Brief description of your legal issue *
                <textarea name="issue" value={form.issue} onChange={handleChange} required placeholder="Describe your situation briefly..." rows={4} />
              </label>
              <p className="form-note">⚠️ All information is confidential. This is a free service.</p>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Request Free Appointment'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
