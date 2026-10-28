import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import useTheme from './hooks/useTheme'
import Contact from './sections/Contact'
import Services from './sections/Services'
import Resume from './sections/Resume'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <NavBar theme={theme} toggle={toggle} />
      <Hero />
      <About />
      <Resume/>
      <Services/>
      <Projects/>
      <Contact/>
    </>
  )
}