import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const listener = (e) => setEnabled(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("has-fine-pointer", enabled);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[300] h-2 w-2 rounded-full bg-accent" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[300] h-8 w-8 rounded-full border border-accent/50 transition-transform duration-150 ease-out" />
    </>
  );
}