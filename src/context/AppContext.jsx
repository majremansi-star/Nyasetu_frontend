import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

const translations = {
  en: {
    navHome: 'Home',
    navRights: 'Know Your Rights',
    navLegalAid: 'Legal Aid Centers',
    navFaq: 'FAQ',
    emergency: '🚨 Emergency Legal Help: Call 15100 (NALSA Helpline) — Free, 24/7',
    heroTitle: 'Your Bridge to Justice',
    heroSub: 'Free legal guidance, know your rights, and connect with legal aid — in your language.',
    getHelp: 'Get Legal Help',
    knowRights: 'Know Your Rights',
    chatBot: 'Ask a Legal Question',
    bookAppointment: 'Book Free Appointment',
  },
  hi: {
    navHome: 'होम',
    navRights: 'अपने अधिकार जानें',
    navLegalAid: 'कानूनी सहायता केंद्र',
    navFaq: 'सामान्य प्रश्न',
    emergency: '🚨 आपातकालीन कानूनी सहायता: 15100 पर कॉल करें (NALSA हेल्पलाइन) — निःशुल्क, 24/7',
    heroTitle: 'न्याय का सेतु',
    heroSub: 'निःशुल्क कानूनी मार्गदर्शन, अपने अधिकार जानें और अपनी भाषा में कानूनी सहायता से जुड़ें।',
    getHelp: 'कानूनी सहायता पाएं',
    knowRights: 'अधिकार जानें',
    chatBot: 'कानूनी प्रश्न पूछें',
    bookAppointment: 'निःशुल्क अपॉइंटमेंट बुक करें',
  },
  mr: {
    navHome: 'मुख्यपृष्ठ',
    navRights: 'तुमचे हक्क जाणा',
    navLegalAid: 'कायदेशीर मदत केंद्रे',
    navFaq: 'वारंवार विचारले प्रश्न',
    emergency: '🚨 आपत्कालीन कायदेशीर मदत: 15100 वर कॉल करा (NALSA हेल्पलाइन) — मोफत, 24/7',
    heroTitle: 'न्यायाचा सेतू',
    heroSub: 'मोफत कायदेशीर मार्गदर्शन, तुमचे हक्क जाणा आणि तुमच्या भाषेत कायदेशीर मदतीशी जोडा.',
    getHelp: 'कायदेशीर मदत मिळवा',
    knowRights: 'हक्क जाणा',
    chatBot: 'कायदेशीर प्रश्न विचारा',
    bookAppointment: 'मोफत अपॉइंटमेंट बुक करा',
  }
}

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    document.documentElement.style.setProperty('--font-base', fontSize + 'px')
  }, [fontSize])

  const t = (key) => translations[language]?.[key] || translations.en[key] || key

  return (
    <AppContext.Provider value={{ language, setLanguage, fontSize, setFontSize, t, translations }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
