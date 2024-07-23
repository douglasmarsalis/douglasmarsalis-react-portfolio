//Creating a theme inside React and setting it to the local storage
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize the theme state, getting it from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // Update the body's data-theme attribute and localStorage whenever the theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add propTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
