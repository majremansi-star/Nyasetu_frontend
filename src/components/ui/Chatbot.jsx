import React, { useState, useRef, useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import './Chatbot.css'

const botResponses = {
  arrest: `If you are arrested:\n• You must be told the reason for arrest.\n• You have the right to call a family member.\n• You must appear before a magistrate within 24 hours.\n• You have the right to a free lawyer.\n\nCall 15100 for free legal help.`,
  fir: `If police refuse to file an FIR:\n• Send your complaint by registered post to the Superintendent of Police.\n• Approach the Judicial Magistrate under Section 156(3) CrPC.\n• Contact NALSA at 15100 for guidance.`,
  legal: `Free legal aid is available to:\n• Women and children\n• SC/ST members\n• Persons with disabilities\n• Those earning below ₹1 lakh/year\n\nContact your District Legal Services Authority or call 15100.`,
  maintenance: `You can claim maintenance under Section 125 CrPC regardless of religion. The court can order interim maintenance within 60 days. Contact a Legal Services Authority for free help.`,
  domestic: `For domestic violence protection:\n• Call Women Helpline: 181\n• Contact a Protection Officer in your district\n• Approach the police under Protection of Women from Domestic Violence Act 2005.`,
  default: `I can help with basic legal questions about:\n• Arrest & police rights\n• Filing FIR\n• Free legal aid eligibility\n• Maintenance & domestic violence\n• RTI applications\n\nFor personalized legal advice, please visit your nearest Legal Services Authority or call 15100.`
}

function getResponse(msg) {
  const lower = msg.toLowerCase()
  if (lower.includes('arrest') || lower.includes('police') || lower.includes('detained')) return botResponses.arrest
  if (lower.includes('fir') || lower.includes('complaint')) return botResponses.fir
  if (lower.includes('legal aid') || lower.includes('free lawyer') || lower.includes('afford')) return botResponses.legal
  if (lower.includes('maintenance') || lower.includes('alimony') || lower.includes('support')) return botResponses.maintenance
  if (lower.includes('domestic') || lower.includes('violence') || lower.includes('abuse')) return botResponses.domestic
  return botResponses.default
}

export default function Chatbot() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am your legal assistant. Ask me about your rights, how to file an FIR, get free legal aid, and more.' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function send() {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(m => [...m, { from: 'user', text: userMsg }])
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: getResponse(userMsg) }])
    }, 600)
  }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(v => !v)} aria-label="Open legal chatbot">
        {open ? '✕' : '💬'}
        {!open && <span className="chat-fab-label">{t('chatBot')}</span>}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>⚖️ Legal Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type your legal question..."
              aria-label="Type your legal question"
            />
            <button onClick={send}>Send</button>
          </div>
          <p className="chatbot-disclaimer">⚠️ General info only. Not legal advice. Call 15100 for free legal help.</p>
        </div>
      )}
    </>
  )
}
