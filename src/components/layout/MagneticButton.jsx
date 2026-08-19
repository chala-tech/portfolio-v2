import { useRef } from "react";

export default function MagneticButton({ children, className, href }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a ref={ref} href={href} onMouseMove={handleMove} onMouseLeave={handleLeave} className={`inline-block transition-transform duration-200 ease-out ${className}`}>
      {children}
    </a>
  );
}