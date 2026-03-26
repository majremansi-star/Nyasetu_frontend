import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './HomePage.css'

const features = [
  { icon: '📜', title: 'Know Your Rights', desc: 'Understand your fundamental and legal rights in plain language — without legal jargon.', to: '/rights' },
  { icon: '🏛️', title: 'Free Legal Aid', desc: 'Find verified legal aid centers, NGOs and helplines near you that offer free consultations.', to: '/legal-aid' },
  { icon: '❓', title: 'Common Questions', desc: 'Answers to the most frequently asked legal questions — FIR, arrest, maintenance, and more.', to: '/faq' },
  { icon: '💬', title: 'Legal Chatbot', desc: 'Ask basic legal questions and get instant guidance from our AI legal assistant.', to: '/' },
]

const stats = [
  { number: '1.4B+', label: 'Indians Protected' },
  { number: '8', label: 'Fundamental Rights' },
  { number: '15100', label: 'NALSA Helpline' },
  { number: 'Free', label: 'Always & Forever' },
]

const helplineCategories = [
  { emoji: '⚖️', name: 'Legal Aid', number: '15100', detail: 'NALSA — 24/7 free legal guidance' },
  { emoji: '👩', name: 'Women Safety', number: '181', detail: 'Women Helpline — immediate support' },
  { emoji: '🧒', name: 'Child Help', number: '1098', detail: 'Childline — abuse & protection' },
  { emoji: '🏥', name: 'Medical Emergency', number: '108', detail: 'Ambulance — free service' },
  { emoji: '🚨', name: 'Police', number: '100', detail: 'Dial 100 — all emergencies' },
  { emoji: '🔥', name: 'National Emergency', number: '112', detail: 'Single emergency number' },
]

export default function HomePage() {
  const { t } = useApp()

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="container hero-content">
          <div className="hero-badge">🇮🇳 Your Constitutional Rights</div>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSub')}</p>
          <div className="hero-actions">
            <Link to="/legal-aid" className="btn btn-gold">{t('getHelp')}</Link>
            <Link to="/rights" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>{t('knowRights')}</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Everything You Need to Access Justice</h2>
          <div className="features-grid">
            {features.map(f => (
              <Link to={f.to} key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="feature-link">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Helplines */}
      <section className="helplines-section">
        <div className="container">
          <p className="section-label">Emergency Contacts</p>
          <h2 className="section-title">Important Helpline Numbers</h2>
          <div className="helplines-grid">
            {helplineCategories.map(h => (
              <a href={`tel:${h.number}`} key={h.number} className="helpline-card">
                <span className="helpline-emoji">{h.emoji}</span>
                <div>
                  <div className="helpline-name">{h.name}</div>
                  <div className="helpline-number">{h.number}</div>
                  <div className="helpline-detail">{h.detail}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Can't Afford a Lawyer?</h2>
          <p>Free legal aid is your constitutional right. Under Article 39A, the government must provide free legal services to those who cannot afford it. You are not alone.</p>
          <Link to="/legal-aid" className="btn btn-gold">Find Free Legal Aid Near You →</Link>
        </div>
      </section>
    </div>
  )
}
