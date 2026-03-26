import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { rights } from '../data/data'
import './RightsPage.css'

const categories = ['All', 'Fundamental Rights', 'Legal Rights', "Women's Rights"]

export default function RightsPage() {
  const { t } = useApp()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = selectedCategory === 'All' ? rights : rights.filter(r => r.category === selectedCategory)

  return (
    <div className="rights-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Your Constitutional Rights</p>
          <h1>{t('navRights')}</h1>
          <p>Understand your rights in simple language. Knowledge is your first line of defense.</p>
        </div>
      </div>

      <div className="container rights-content">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rights Cards */}
        <div className="rights-grid">
          {filtered.map(right => (
            <div key={right.id} className="right-card">
              <div className="right-header" onClick={() => setExpandedId(expandedId === right.id ? null : right.id)}>
                <div className="right-icon-wrap">
                  <span className="right-icon">{right.icon}</span>
                  <div>
                    <span className="right-cat-badge">{right.category}</span>
                    <h3>{right.title}</h3>
                    <span className="right-article">{right.article}</span>
                  </div>
                </div>
                <span className="expand-icon">{expandedId === right.id ? '▲' : '▼'}</span>
              </div>

              <p className="right-summary">{right.summary}</p>

              {expandedId === right.id && (
                <div className="right-expanded">
                  <div className="expanded-block">
                    <h4>📖 What it means</h4>
                    <p>{right.details}</p>
                  </div>
                  <div className="expanded-block how-to">
                    <h4>✅ How to exercise this right</h4>
                    <p>{right.howToExercise}</p>
                  </div>
                </div>
              )}

              <button
                className="toggle-btn"
                onClick={() => setExpandedId(expandedId === right.id ? null : right.id)}
              >
                {expandedId === right.id ? 'Show Less ▲' : 'Learn More ▼'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rights-disclaimer">
        <div className="container">
          ⚠️ This information is general in nature. For specific legal situations, please consult a qualified lawyer or contact your District Legal Services Authority (DLSA). Call 15100 for free legal aid.
        </div>
      </div>
    </div>
  )
}
