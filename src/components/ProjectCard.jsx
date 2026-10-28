import { Button } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, description, image, tech, github, live } = project
  return (
    <div className="soft-card project-card h-100 d-flex flex-column">
      {image ? (
        <img src={image} alt={title} className="project-img" />
      ) : (
        <div className="project-img project-img-fallback" />
      )}
      <h5 className="mt-3">{title}</h5>
      <p className="text-secondary small">{description}</p>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {tech.map(t => (
          <span key={t} className="skill-chip">{t}</span>
        ))}
      </div>
      <div className="d-flex gap-2 mt-auto">
        {github && (
          <Button href={github} target="_blank" rel="noreferrer"
            variant="outline-secondary" size="sm">
            <FaGithub /> GitHub
          </Button>
        )}
        {live && (
          <Button href={live} target="_blank" rel="noreferrer"
            size="sm" className="btn-gradient">
            Live Demo <FiExternalLink />
          </Button>
        )}
      </div>
    </div>
  )
}