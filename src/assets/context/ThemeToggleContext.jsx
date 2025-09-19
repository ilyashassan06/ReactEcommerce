import React, { createContext, useEffect, useState } from 'react'

   
 export const ThemeContext = createContext();

function ThemeToggleContext({children}) {
     const [theme, setTheme] = useState("light");

  // ✅ Load saved theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  // ✅ Apply theme whenever it changes
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeToggleContext