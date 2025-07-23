// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      data-section
      className="snap-start h-screen flex items-center justify-center bg-white focus:outline-none animate-fadeIn"
      tabIndex={-1}
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 text-2xl">
        ↓
      </div>
    </section>
  )
}
