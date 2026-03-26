import React from 'react'
import { useApp } from '../../context/AppContext'
import './FontControls.css'

export default function FontControls() {
  const { fontSize, setFontSize } = useApp()

  return (
    <div className="font-controls" role="group" aria-label="Font size controls">
      <button
        onClick={() => setFontSize(s => Math.max(12, s - 2))}
        aria-label="Decrease font size"
        title="Smaller text"
      >
        A<span>−</span>
      </button>
      <button
        onClick={() => setFontSize(16)}
        aria-label="Reset font size"
        title="Reset text size"
      >
        A
      </button>
      <button
        onClick={() => setFontSize(s => Math.min(24, s + 2))}
        aria-label="Increase font size"
        title="Larger text"
      >
        A<span>+</span>
      </button>
    </div>
  )
}
