import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import FontControls from '../ui/FontControls'
import './Navbar.css'

export default function Navbar() {
  const { t, language, setLanguage } = useApp()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/rights', label: t('navRights') },
    { to: '/legal-aid', label: t('navLegalAid') },
    { to: '/faq', label: t('navFaq') },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">⚖️</span>
          <div>
            <span className="brand-name">Nyaya Setu</span>
            <span className="brand-tagline">न्याय सेतु</span>
          </div>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-controls">
          <select
            className="lang-select"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>
          <FontControls />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
