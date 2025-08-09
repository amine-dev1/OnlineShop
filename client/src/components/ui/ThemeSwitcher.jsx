import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react"; 

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();


  const [systemTheme, setSystemTheme] = React.useState("light");

  React.useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemTheme(match.matches ? "dark" : "light");
    update();
    match.addEventListener("change", update);
    return () => match.removeEventListener("change", update);
  }, []);

  const current = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-sm flex items-center justify-center transition duration-300"
      aria-label="Toggle Theme"
    >
      {current === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeSwitcher;
