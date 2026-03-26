import React, { useState } from 'react'
import { legalCenters } from '../data/data'
import AppointmentModal from '../components/ui/AppointmentModal'
import './LegalAidPage.css'

const types = ['All', 'National', 'State', 'NGO']

export default function LegalAidPage() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedCenter, setSelectedCenter] = useState(null)

  const filtered = legalCenters.filter(c => {
    const matchType = filter === 'All' || c.type === filter
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.state.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="legal-aid-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Free Legal Assistance</p>
          <h1>Legal Aid Centers</h1>
          <p>Find free legal help from verified government authorities and trusted NGOs.</p>
        </div>
      </div>

      <div className="container aid-content">
        {/* Info Bar */}
        <div className="info-bar">
          <span>📞 Emergency Legal Help: <strong>15100</strong> (NALSA) — Free, 24/7</span>
          <span>All services listed below are <strong>100% Free</strong> for eligible citizens</span>
        </div>

        {/* Filters */}
        <div className="aid-filters">
          <input
            type="search"
            className="aid-search"
            placeholder="Search by name or state..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search legal aid centers"
          />
          <div className="type-filter">
            {types.map(t => (
              <button
                key={t}
                className={`cat-btn ${filter === t ? 'active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Centers Grid */}
        <div className="centers-grid">
          {filtered.length === 0 ? (
            <p className="no-results">No centers found. Try a different search or filter.</p>
          ) : (
            filtered.map(center => (
              <div key={center.id} className="center-card">
                <div className="center-top">
                  <div>
                    <span className={`type-badge type-${center.type.toLowerCase()}`}>{center.type}</span>
                    <h3>{center.name}</h3>
                    <p className="center-state">📍 {center.state}</p>
                  </div>
                </div>

                <div className="center-info">
                  <p>🕐 {center.hours}</p>
                  <p>🌐 <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website.replace('https://', '')}</a></p>
                  <p>📞 <a href={`tel:${center.phone}`}>{center.phone}</a></p>
                  <p>✉️ <a href={`mailto:${center.email}`}>{center.email}</a></p>
                </div>

                <div className="center-services">
                  {center.services.map(s => <span key={s} className="service-tag">{s}</span>)}
                </div>

                <div className="center-langs">
                  🗣️ {center.languages.join(', ')}
                </div>

                <div className="center-actions">
                  <a href={`tel:${center.phone}`} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                    📞 Call Now
                  </a>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setSelectedCenter(center)}>
                    📅 Book Appointment
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedCenter && (
        <AppointmentModal center={selectedCenter} onClose={() => setSelectedCenter(null)} />
      )}
    </div>
  )
}
