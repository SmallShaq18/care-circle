import Header from './components/Header'
import Hero from './components/Hero'
import SupportCategories from './components/SupportCategories'
import PrivacyNotice from './components/PrivacyNotice'
import EmergencyNote from './components/EmergencyNote'
import SupportForm from './components/SupportForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PrivacyNotice />
        <EmergencyNote />
        <SupportCategories />
        <SupportForm />
      </main>
      <Footer />
    </div>
  )
}
