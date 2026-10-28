export default function SectionTitle({ first, second, subtitle }) {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold text-uppercase">
        {first}<span className="text-gradient">{second}</span>
      </h2>
      <p className="text-secondary">{subtitle}</p>
    </div>
  )
}