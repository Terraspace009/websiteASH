export default function HeroPoints() {
  return (
    <div className="hero-points" aria-hidden="true">
      {Array.from({ length: 20 }, (_, i) => (
        <i
          key={i}
          style={{
            left: 8 + ((i * 29) % 82) + "%",
            top: 12 + ((i * 37) % 74) + "%",
          }}
        />
      ))}
    </div>
  );
}
