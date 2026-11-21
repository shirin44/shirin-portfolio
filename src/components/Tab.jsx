import { useEffect, useRef } from "react";

export default function Tab({ text, color, active, onClick }) {
  const ref = useRef(null);
  useEffect(() => {
    if (active && window.innerWidth <= 1024) {
      ref.current?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [active]);

  return (
    <button
      ref={ref}
      type="button"
      aria-current={active ? "page" : undefined}
      className={"tab2" + (active ? " tab2--active" : "")}
      style={{ background: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
