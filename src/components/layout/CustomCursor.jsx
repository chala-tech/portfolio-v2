import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-accent md:block" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 rounded-full border border-accent/50 transition-transform duration-150 ease-out md:block" />
    </>
  );
}