import { Container, Row, Col } from 'react-bootstrap'
import { FiBriefcase, FiBookOpen, FiAward} from 'react-icons/fi'
import { experience, education } from '../data/resume'
import { certifications } from '../data/certifications'

function TimelineItem({ Icon, item }) {
  return (
    <div className="timeline-item">
      <span className="timeline-dot"><Icon /></span>
      <div className={`soft-card ${item.current ? 'timeline-current' : ''}`}>
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <span className="pill-tag">{item.period}</span>
          {item.current && <span className="current-badge">Current</span>}
          {item.level && <span className="level-label">{item.level}</span>}
        </div>
        <h5 className="mb-1">{item.title}</h5>
        <div className="text-cyan small fw-semibold mb-2">{item.org}</div>
        <p className="text-secondary small mb-2">{item.text}</p>
        {item.tags && (
          <div className="d-flex flex-wrap gap-2">
            {item.tags.map((t) => <span key={t} className="skill-chip">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="section-pad">
      <Container>
        <div className="text-center mb-5">
          <span className="eyebrow mb-3">Resume</span> 
          <p className="text-secondary mx-auto" style={{ maxWidth:700 }}>
            Explore my technical training, academic background and practical experience in Web Development
            as i work toward building modern, scalable and user-focused applications.
          </p>
        </div>

        <Row className="g-5">
          <Col lg={6}>
            <span className="pill-tag">Experience</span>
            <h3 className="fw-bold mt-3 mb-4">Professional Journey</h3>
            <div className="timeline">
              {experience.map((item) => (
                <TimelineItem key={item.title} Icon={FiBriefcase} item={item} />
              ))}
            </div>
          </Col>

          <Col lg={6}>
            <span className="pill-tag">Education</span>
            <h3 className="fw-bold mt-3 mb-4">Academic Background</h3>
            <div className="timeline">
                {education.map((item) => (
                <TimelineItem key={item.title} Icon={FiBookOpen} item={item} />
                ))}

                {certifications.length > 0 && (
                <div className="timeline-item">
                    <span className="timeline-dot"><FiAward /></span>
                    <div className="soft-card">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="mb-0">Professional Certifications</h5>
                        <span className="level-label">Certificates</span>
                    </div>
                    {certifications.map((c) => (
                        <div key={c.title} className="cert-row">
                        <div>
                            {c.link ? (
                            <a href={c.link} target="_blank" rel="noreferrer"
                                className="cert-name">{c.title}</a>
                            ) : (
                            <span className="cert-name">{c.title}</span>
                            )}
                            <div className="text-secondary small">{c.issuer}</div>
                        </div>
                        <span className="pill-tag">{c.date}</span>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}