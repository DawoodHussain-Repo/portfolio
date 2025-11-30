import { useRef, useEffect, ReactNode, useCallback } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "outline" | "filled";
}

const MagneticButton = ({
  children,
  onClick,
  href,
  className = "",
  variant = "outline",
}: MagneticButtonProps) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const fill = fillRef.current;
    const text = textRef.current;

    if (!btn || !fill || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic effect on button
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out",
      });

      // Parallax effect on text
      gsap.to(text, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.5,
        ease: "power2.out",
      });

      // Move fill to follow cursor
      gsap.to(fill, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();

      // Set initial fill position
      gsap.set(fill, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      // Expand fill
      gsap.to(fill, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Spring back
      gsap.to([btn, text], {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });

      // Shrink fill
      gsap.to(fill, {
        scale: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseStyles = `
    relative px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium cursor-pointer overflow-hidden
    tracking-wide inline-flex items-center gap-2 md:gap-3 transition-colors duration-300 whitespace-nowrap
  `;

  const variantStyles =
    variant === "outline"
      ? "border border-white/20 bg-transparent text-white hover:border-transparent"
      : "border border-cyan-500/50 bg-cyan-500/10 text-white hover:border-transparent";

  const handleClick = useCallback(() => {
    if (onClick) onClick();
    if (href) window.location.href = href;
  }, [onClick, href]);

  return (
    <div
      ref={btnRef}
      role={href ? "link" : "button"}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span
        ref={textRef}
        className="relative z-10 pointer-events-none mix-blend-difference flex items-center gap-3"
      >
        {children}
      </span>
      <div
        ref={fillRef}
        className="absolute top-0 left-0 w-[150%] pb-[150%] rounded-full bg-white pointer-events-none z-[1]"
        style={{ transform: "translate(-50%, -50%) scale(0)" }}
      />
    </div>
  );
};

export default MagneticButton;
