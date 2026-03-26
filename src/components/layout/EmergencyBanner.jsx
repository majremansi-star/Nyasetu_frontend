import React, { useState } from 'react'
import { useApp } from '../../context/AppContext'
import './EmergencyBanner.css'

export default function EmergencyBanner() {
  const { t } = useApp()
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="emergency-banner" role="alert">
      <span>{t('emergency')}</span>
      <button onClick={() => setVisible(false)} aria-label="Close emergency banner">✕</button>
    </div>
  )
}
