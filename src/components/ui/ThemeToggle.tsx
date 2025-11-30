import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { gsap } from "gsap";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    // Animate the toggle
    gsap.fromTo(
      ".theme-icon",
      { scale: 0, rotate: -180 },
      { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)" }
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="hoverable w-10 h-10 rounded-full border border-white/20 dark:border-white/20 flex items-center justify-center 
                 text-cyan-500 dark:text-white hover:bg-white/10 transition-all duration-300"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="theme-icon w-5 h-5" />
      ) : (
        <Moon className="theme-icon w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
