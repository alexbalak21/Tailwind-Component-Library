import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function Page() {
  const [theme, setTheme] = useState<Theme>("system");

  // Apply theme to <html>
  const applyTheme = (t: Theme) => {
    if (t === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (t === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // system mode
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved || "system";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  // Listen for OS theme changes when in system mode
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  // Change theme manually
  const changeTheme = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-10">Theme System</h1>
        <h2 className="text-3xl font-bold text-primary-500 mb-10">Current: {theme}</h2>

        <div className="flex gap-4 justify-center">
          <button onClick={() => changeTheme("light")} className="px-4 py-2 bg-gray-200 rounded">
            Light
          </button>
          <button onClick={() => changeTheme("dark")} className="px-4 py-2 bg-gray-800 text-white rounded">
            Dark
          </button>
          <button onClick={() => changeTheme("system")} className="px-4 py-2 bg-blue-500 text-white rounded">
            System
          </button>
        </div>
      </div>
    </div>
  );
}
