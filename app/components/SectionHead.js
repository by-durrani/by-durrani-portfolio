export default function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <h2>{title}</h2>
      <span className="rule" />
    </div>
  );
}
