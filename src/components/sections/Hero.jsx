import Scene from "../three/Scene";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen w-full flex-col items-center overflow-hidden bg-bg md:flex-row">
      <div className="z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:items-start md:px-16 md:text-left">
        <h1 className="text-4xl font-bold text-text md:text-6xl">Chala Fokora</h1>
        <p className="mt-4 text-lg text-accent md:text-2xl">Full-Stack Developer</p>
        <p className="mt-6 max-w-md text-text-muted">Building modern, dynamic web experiences.</p>
      </div>

      <div className="h-[45vh] w-full flex-1 md:h-full">
        <Scene />
      </div>
    </section>
  );
}