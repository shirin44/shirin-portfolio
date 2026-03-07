export default function Tab({ text, color, active, onClick }) {
  return (
    <button
      type="button"
      className={"tab2" + (active ? " tab2--active" : "")}
      style={{ background: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
