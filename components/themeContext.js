// ThemeContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a context to manage theme
export const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the entire application
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Define the theme object based on the current mode
  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#121212' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#000000',
      // Add more theme colors as needed
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
