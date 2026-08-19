import { useEffect, useRef } from "react";

// soft glow that follows the cursor across the whole page
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
      style={{ background: "radial-gradient(circle, #00f0ff 0%, transparent 70%)" }}
    />
  );
}