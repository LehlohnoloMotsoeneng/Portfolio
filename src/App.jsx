import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Documents from './components/Documents'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Outcomes from './components/Outcomes'
import Projects from './components/Projects'
import Reflections from './components/Reflections'
import Skills from './components/Skills'

const routes = {
  '/': Hero,
  '/about': About,
  '/skills': Skills,
  '/projects': Projects,
  '/journey': Journey,
  '/reflections': Reflections,
  '/outcomes': Outcomes,
  '/documents': Documents,
  '/contact': Contact,
}

const getCurrentPath = () => {
  const path = window.location.pathname.replace(/\/$/, '')
  return path || '/'
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={18} />
    </button>
  )
}

function App() {
  const Page = routes[getCurrentPath()] || Hero

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Page />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App
