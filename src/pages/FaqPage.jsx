import React, { useState } from 'react'
import { faqs } from '../data/data'
import './FaqPage.css'

const categories = ['All', 'Legal Aid', 'Criminal Law', 'Property Rights', "Women's Rights", 'Documentation', 'Labour Rights', 'Consumer Rights']

export default function FaqPage() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [expandedId, setExpandedId] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(f => {
    const matchCat = selectedCat === 'All' || f.category === selectedCat
    const matchSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="faq-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Answers You Need</p>
          <h1>Frequently Asked Questions</h1>
          <p>Common legal questions answered in plain language, without jargon.</p>
        </div>
      </div>

      <div className="container faq-content">
        {/* Search */}
        <div className="faq-search-wrap">
          <input
            type="search"
            className="faq-search"
            placeholder="Search your question..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search FAQs"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Category Filter */}
        <div className="faq-cats">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filtered.length === 0 ? (
            <p className="no-results">No questions found. Try a different search or category.</p>
          ) : (
            filtered.map(faq => (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  aria-expanded={expandedId === faq.id}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-cat-badge">{faq.category}</span>
                  <span className="faq-arrow">{expandedId === faq.id ? '▲' : '▼'}</span>
                </button>

                {expandedId === faq.id && (
                  <div className="faq-answer">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Still Need Help */}
        <div className="still-help">
          <h3>Still have a question?</h3>
          <p>If you can't find your answer here, contact a free legal aid service:</p>
          <div className="help-options">
            <a href="tel:15100" className="btn btn-primary">📞 Call 15100 (NALSA)</a>
            <a href="mailto:nalsa@nic.in" className="btn btn-outline">✉️ Email NALSA</a>
          </div>
        </div>
      </div>
    </div>
  )
}
