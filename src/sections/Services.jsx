import { Container, Row, Col } from 'react-bootstrap'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <Container>
        <div className="text-center mb-5">
          <span className="eyebrow">Services</span>
          <h2 className="display-5 fw-bold mt-3">Services i can offer</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 650 }}>
            From building modern websites and full-stack applications to creating engaging content and providing 
            digital business support, i offer pracrical solutions designed to help both individuals and businesses to grow.
          </p>
        </div>

        <Row className="g-4">
          {services.map(({ Icon, title, text, featured }) => (
            <Col md={6} lg={3} key={title}>
              <div className={`service-card ${featured ? 'featured' : ''}`}>
                {featured && <span className="ribbon">Featured</span>}
                <span className="service-icon"><Icon /></span>
                <h5>{title}</h5>
                <p className="text-secondary small">{text}</p>
                <a href="#contact" className="service-link">Get in touch →</a>
              </div>
            </Col>
          ))}
        </Row>

        <div className="cta-banner">
          <div>
            <h4 className="mb-1">Have a project in mind?</h4>
            <p>Let's talk about how I can help bring your idea to life.</p>
          </div>
          <a href="#contact" className="btn btn-pill btn-light">Start a Project</a>
        </div>
      </Container>
    </section>
  )
}