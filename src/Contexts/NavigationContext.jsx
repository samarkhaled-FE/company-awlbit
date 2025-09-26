import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navigateToSection = (section) => {
    setActiveSection(section);
    // إضافة smooth scroll للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{
      activeSection,
      navigateToSection
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
