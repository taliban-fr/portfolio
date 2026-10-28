import { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FiMoon, FiSun } from 'react-icons/fi'
import { FaPhoneAlt} from 'react-icons/fa'

const links = ['Home', 'About', 'Resume', 'Services', 'Projects', 'Contact Me']

const socials = [
  { Icon: FaPhoneAlt, label: 'Call me through', href: 'tel:+254793079569'},
]

export default function NavBar({ theme, toggle }) {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <Navbar expand="lg" sticky="top" expanded={expanded}
      onToggle={setExpanded} className="ref-nav">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-lg-none">
          Mike Kioko
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-3">
          <div className="d-none d-lg-flex align-items-center">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                aria-label={label} className="social-link">
                <Icon />
              </a>
            ))}
          </div>
          <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <Navbar.Toggle aria-controls="nav" />
        </div>

        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            {links.map((l) => {
              const id = l.toLowerCase()
              return (
                <Nav.Link key={l} href={`#${id}`} active={active === id}
                  onClick={() => setExpanded(false)}>
                  {l}
                </Nav.Link>
              )
            })}
          </Nav>
          <div className="d-flex d-lg-none gap-2 pb-2">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                aria-label={label} className="icon-btn"><Icon /></a>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}