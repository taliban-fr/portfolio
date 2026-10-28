import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FiDownload, FiMail } from 'react-icons/fi'
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import { aboutInfo, stats, skillBars,rating } from '../data/about'

function Stars({ value }) {
  return [1, 2, 3, 4, 5].map((n) => {
    if (value >= n) return <FaStar key={n} />
    if (value >= n - 0.5) return <FaStarHalfAlt key={n} />
    return <FaRegStar key={n} />
  })
}
export default function About() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <div className="text-center mb-5">
          <span className="eyebrow">About Me</span>
        </div>

        <Row className="g-4">
          {/* left: profile card */}
          <Col lg={4}>
            <div className="soft-card profile-card">
              <div className="avatar-wrap">
                <img src="/prof.jpeg" alt="Mike Kioko" className="avatar" />
                <span className="avatar-dot" />
              </div>
              <h4 className="mb-1">Mike Kioko</h4>
              <div className="text-cyan fw-semibold small"> Full-stack Software Developer</div>
              <p className="profile-note">Open to internships and collaborations</p>
              <div className="rating mt-2">
              <Stars value={rating} />
              <span className="rating-value">{rating}</span>
              </div>

              <div className="stat-row">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>

              <a href="/resume.pdf" download
                className="btn btn-pill btn-teal w-100 mb-2">
                <FiDownload /> Download CV
              </a>
              <a href="mailto:kmikekioko1@gmail.com" className="btn btn-pill btn-outline-teal w-100 mb-3">
                <FiMail /> Contact Me
              </a>
            </div>
          </Col>

          {/* right: story, info cards, skill bars */}
          <Col lg={8}>
            <span className="pill-tag">Background</span>
            <h3 className="fw-bold mt-3 mb-3 fs-6">
              Turning Ideas into Digital Realities with Passion and Precision.
            </h3>
            <p className="text-secondary">
              My journey in the tech world began with a fascination on how various technologies work and the eagerness to learn.
              This curiosity led me to specialize in Web Development, where I focus on creating dynamic, responsive websites with Modern Development workflows.<br></br>
              I enjoy turning ideas into functional, user-friendly digital experiences.</p>
            <p className="text-secondary">
              I'm continuously developing my Web Dev skills through attending various training programs, bootcamps , hackathons, 
              where i strengthen my technical knowledge and practical experience.
              I'm passionate about writing clean maintainable code and buildibg solutions that address real-world problems.
            </p>

            <Row className="g-3 my-3">
              {aboutInfo.map(({ Icon, label, value }) => (
                <Col sm={6} key={label}>
                  <div className="info-card">
                    <Icon className="info-icon" />
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <span className="pill-tag mt-4">Core Skills</span>
            <h4 className="fw-bold mt-3 mb-4">Technical Proficiency</h4>
            {skillBars.map(({ name, level }) => (
              <div key={name} className="mb-3">
                <div className="d-flex justify-content-between small mb-1">
                  <span className="fw-semibold">{name}</span>
                  <span className="text-secondary">{level}%</span>
                </div>
                <div className="bar-track">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}