import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'

const filters = ['All Work', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All Work')
  const visible = projects.filter(
    (p) => active === 'All Work' || p.category === active
  )

  return (
    <section id="projects" className="section-pad">
      <Container>
        <div className="text-center mb-4">
          <span className="eyebrow">Projects</span>
          <h2 className="display-5 fw-bold mt-3">My Work</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 560 }}>
            A selection of things I've designed and built.
          </p>
        </div>

        <div className="filter-bar">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`filter-btn ${active === f ? 'active' : ''}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="row g-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="col-md-6 col-lg-4"
              >
                <div className="work-card">
                  <div className="work-media">
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" />
                    ) : (
                      <div className="work-fallback">{p.title}</div>
                    )}
                    <div className="work-overlay">
                      <span className="work-cat">{p.category}</span>
                      <h5>{p.title}</h5>
                      <p>{p.description}</p>
                      <div className="work-actions">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          className="work-pill work-pill-live">
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className="work-pill">
                          <FaGithub /> Code
                        </a>
                      )}
                    </div>
                    </div>
                  </div>
                  <div className="work-meta">
                    <div className="d-flex flex-wrap gap-2">
                      {p.tags.map((t) => <span key={t} className="work-tag">{t}</span>)}
                    </div>
                    <span className="work-year">{p.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="work-cta">
          <div>
            <h5 className="mb-1">Like what you see?</h5>
            <p className="text-secondary small mb-0">
              Have a project in mind? Let's talk about it.
            </p>
          </div>
          <a href="#contact" className="btn btn-pill btn-teal">Let's Work Together</a>
        </div>
      </Container>
    </section>
  )
}