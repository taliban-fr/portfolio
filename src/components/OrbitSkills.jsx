import { color } from 'framer-motion'
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,FaNodeJs,FaDocker,FaGithub} from 'react-icons/fa'
import { SiFastapi, SiTailwindcss,SiMongodb,SiPostgresql } from 'react-icons/si'

const skills = [
  { name: 'Python', Icon: FaPython, color: '#3776ab' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#5FA04E' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
  { name: 'GitHub', Icon: FaGithub, color: '#181717' },
  { name: 'HTML5', Icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
  { name: 'React.js', Icon: FaReact, color: '#61dafb' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'MongoDB', Icon:SiMongodb, color: '#00ED64'},
  { name: 'PostgreSQL',Icon:SiPostgresql, color: '#4169E1'},
]

export default function OrbitSkills() {
  return (
    <div className="orbit-wrap">
      <div className="orbit-ring">
        {skills.map(({ name, Icon, color }, i) => (
          <div
            key={name}
            className="orbit-item"
            style={{ '--angle': `${i * (360 / skills.length)}deg` }}
          >
            <span className="orbit-icon" style={{ color }}>
              <Icon size={28} />
              <small className="orbit-label">{name}</small>
            </span>
          </div>
        ))}
      </div>
      <img src="/profile1.jpeg" alt="Mike Kioko" className="orbit-photo" />
    </div>
  )
}