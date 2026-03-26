import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">⚖️ Nyaya Setu</div>
          <p>Bridging the gap between citizens and justice. Free legal information for every Indian.</p>
          <p className="footer-disclaimer">⚠️ This site provides general legal information, not legal advice. Always consult a qualified lawyer for your specific situation.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/rights">Know Your Rights</Link>
          <Link to="/legal-aid">Legal Aid Centers</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4>Emergency Helplines</h4>
          <a href="tel:15100">15100 — NALSA Legal Aid</a>
          <a href="tel:181">181 — Women Helpline</a>
          <a href="tel:1098">1098 — Child Helpline</a>
          <a href="tel:100">100 — Police</a>
          <a href="tel:112">112 — National Emergency</a>
        </div>

        <div className="footer-col">
          <h4>Official Resources</h4>
          <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer">NALSA</a>
          <a href="https://nhrc.nic.in" target="_blank" rel="noopener noreferrer">NHRC</a>
          <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer">RTI Online</a>
          <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer">eCourts</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Nyaya Setu. Built to empower citizens with knowledge of their rights by Mayuri Majre & Mansi Majre</p>
        </div>
      </div>
    </footer>
  )
}
