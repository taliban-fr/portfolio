import { Button } from 'react-bootstrap'
import { FiAward, FiExternalLink } from 'react-icons/fi'

export default function CertCard({ cert }) {
  const { title, issuer, date, link } = cert
  return (
    <div className="soft-card h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <FiAward size={24} className="text-primary" />
        <span className="badge text-bg-success-subtle text-success-emphasis">
          Certified
        </span>
      </div>
      <small className="text-uppercase text-secondary fw-semibold">{issuer}</small>
      <h5 className="mb-1">{title}</h5>
      <small className="text-secondary mb-3">Issued {date}</small>
      {link && (
        <Button href={link} target="_blank" rel="noreferrer"
          size="sm" className="btn-gradient mt-auto">
          View Certificate <FiExternalLink />
        </Button>
      )}
    </div>
  )
}