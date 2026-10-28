import { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import SectionTitle from '../components/SectionTitle'

const info = [
  { Icon: FiMail, label: 'Email', value: 'kmikekioko@gmail.com',
    href: 'mailto:kmikekioko@gmail.com' },
  { Icon: FaLinkedin, label: 'LinkedIn', value: 'nowyouknowmik3-fs',
    href: 'http://linkedin.com/in/nowyouknowmik3-fs' },
  { Icon: FaGithub, label: 'GitHub', value: 'taliban-fr',
    href: 'http://github.com/taliban-fr' },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad">
      <Container>
        <SectionTitle first="CON" second="TACT"
          subtitle="Get in touch with me anytime." />
        <Row className="g-4">
          <Col lg={5}>
            <div className="soft-card h-100">
              <h4>Let's build something great.</h4>
              <p className="text-secondary">
                I'm open to opportunities, collaborations and interesting ideas.
              </p>
              {info.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="d-flex align-items-center gap-3 mb-3 text-decoration-none text-reset">
                  <span className="icon-btn"><Icon /></span>
                  <span>
                    <small className="text-secondary d-block">{label}</small>
                    {value}
                  </span>
                </a>
              ))}
              <small className="text-secondary">Nairobi, Kenya</small>
            </div>
          </Col>

          <Col lg={7}>
            <Form ref={formRef} onSubmit={handleSubmit} className="soft-card">
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="from_name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="from_email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control name="subject" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" required />
              </Form.Group>

              {status === 'success' && (
                <Alert variant="success">Message sent! I'll reply soon.</Alert>
              )}
              {status === 'error' && (
                <Alert variant="danger">
                  Something went wrong. Please try again or email me directly.
                </Alert>
              )}

              <Button type="submit" className="btn-gradient w-100"
                disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : <>Send Message <FiSend /></>}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}