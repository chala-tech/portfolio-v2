import Scene from "../three/Scene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* text overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-text">
          Chala Fokora
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-accent">
          Full-Stack Developer
        </p>
        <p className="mt-6 max-w-xl text-text-muted">
          Building modern, dynamic web experiences.
        </p>
      </div>
    </section>
  );
}