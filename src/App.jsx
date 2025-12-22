import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Christopher Britten <img src="/assets/images/toller.png" alt="" className="duck-icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /> All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
