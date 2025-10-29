import { createContext, useContext, useEffect, useState } from "react";

// Creating a Context for theme state (light/dark)
// This allows any component in the tree to access theme info without prop drilling
const ThemeContext = createContext();

// Provider component → wraps the whole app and manages theme
export const ThemeProvider = ({ children }) => {
  // Initialize theme state using value from localStorage
  // If there's no saved theme, default to "light"
  const [isDarkMode, toggleDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  // useEffect runs whenever the theme changes
  // It updates the DOM <html> class and stores the theme in localStorage
  useEffect(() => {
    const root = window.document.documentElement; // <html> element

    // If theme is "dark", add class "dark" to enable Tailwind dark mode
    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save the user's theme preference in localStorage
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]); // Dependency array → run effect whenever isDarkMode changes

  return (
    // Providing the theme value to children components
    <ThemeContext.Provider
      value={{
        // Turn the string "dark" into a boolean true/false
        isDarkMode: isDarkMode === "dark",
        // Expose state updater to toggle theme (can be used anywhere)
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook → easy way for components to use theme without importing useContext directly
export const useTheme = () => useContext(ThemeContext);
