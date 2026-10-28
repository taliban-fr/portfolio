import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,
  FaNodeJs, FaDocker, FaGithub,
} from 'react-icons/fa'
import { SiFastapi, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'

const inner = [
  { name: 'HTML5', Icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
  { name: 'Python', Icon: FaPython, color: '#3776ab' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
]


const outer = [
  { name: 'React.js', Icon: FaReact, color: '#61dafb' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#5fa04e' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4f8bc9' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ed' },
  { name: 'GitHub', Icon: FaGithub, color: '#9ca3af' },
]

function Ring({ items, className = '', offset = 0, size = 28 }) {
  return (
    <div className={`orbit-ring ${className}`}>
      {items.map(({ name, Icon, color }, i) => (
        <div
          key={name}
          className="orbit-item"
          style={{ '--angle': `${offset + i * (360 / items.length)}deg` }}
        >
          <span className="orbit-icon" style={{ color }} title={name}>
            <Icon size={size} />
            <small className="orbit-label">{name}</small>
          </span>
        </div>
      ))}
    </div>
  )
}

export default function OrbitSkills() {
  return (
    <div className="orbit-wrap">
      <Ring items={outer} />
      <Ring items={inner} className="inner" offset={45} size={20} />
      <img src="/profile1.jpeg" alt="Mike Kioko" className="orbit-photo" />
    </div>
  )
}