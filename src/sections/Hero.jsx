import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaInstagram, FaReddit,FaEnvelope} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import OrbitSkills from '../components/OrbitSkills'
import useTypewriter from '../hooks/useTypewriter'

const roles = [
  'Full-Stack Engineer',
  'Front-end Developer',
  'Backend Developer',
  'UI/UX Designer',



]

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="text-center text-lg-start order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="hero-title">
                Hello, I'm <span className="text-cyan">Mike Kioko</span>
              </h1>
              <p className="hero-role">
                <span className="text-cyan">{role}</span>
                <span className="type-cursor" />
              </p>
              <p className="hero-text mx-auto mx-lg-0">
                Passionate Web Developer focused on building responsive websites and scalable digital platforms that prioritize functionality, accessibility and seamless interactions.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-4">
                <a href="#projects" className="btn btn-pill btn-teal">View My Work</a>
                <a href="#contact" className="btn btn-pill btn-outline-teal">Get In Touch</a>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start gap-2">
                <a href="http://github.com/taliban-fr" target="_blank"
                  rel="noreferrer" aria-label="GitHub" className="social-round">
                  <FaGithub />
                </a>
                <a href="http://linkedin.com/in/nowyouknowmik3-fs" target="_blank"
                  rel="noreferrer" aria-label="LinkedIn" className="social-round">
                  <FaLinkedin />
                </a>
                <a href="mailto:kmikekioko1@gmail.com" target="_blank" 
                  rel="noreferrer" aria-label="Gmail" className="social-round"> 
                  <FaEnvelope /> 
                </a>
                <a href="https://www.instagram.com/_.nowyouknowmik3_?mdxt=NzVlczl4YXZtYndt" target="_blank"
                  rel="noreferrer" aria-label="Instagram" className="social-round">
                  <FaInstagram />
                </a>
                <a href="https://x.com/talibanfr" target="_blank"
                  rel="noreferrer" aria-label="Twitter" className="social-round">
                  <FaXTwitter/>
                </a>
                <a href="https://www.reddit.com/u/FUll-stack_dev001/s/BOwMtI0yEz" target="_blank"
                  rel="noreferrer" aria-label="Reddit" className="social-round">
                  <FaReddit/>
                </a>
              </div>
            </motion.div>
          </Col>

          <Col lg={6} className="order-1 order-lg-2 d-flex justify-content-center">
            <OrbitSkills />
          </Col>
        </Row>
      </Container>
    </section>
  )
}