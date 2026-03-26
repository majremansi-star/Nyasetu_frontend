import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import EmergencyBanner from './components/layout/EmergencyBanner'
import Chatbot from './components/ui/Chatbot'
import HomePage from './pages/HomePage'
import RightsPage from './pages/RightsPage'
import LegalAidPage from './pages/LegalAidPage'
import FaqPage from './pages/FaqPage'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <EmergencyBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rights" element={<RightsPage />} />
            <Route path="/legal-aid" element={<LegalAidPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </AppProvider>
  )
}
