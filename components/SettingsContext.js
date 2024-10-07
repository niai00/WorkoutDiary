import * as React from 'react';

export const SettingsContext = React.createContext({
  isUsingMiles: false,
  toggleUnit: () => {}
});

export const SettingsProvider = ({ children }) => {
  const [isUsingMiles, setIsUsingMiles] = React.useState(false);

  const toggleUnit = () => {
    setIsUsingMiles(!isUsingMiles);
  };

  return (
    <SettingsContext.Provider value={{ isUsingMiles, toggleUnit }}>
      {children}
    </SettingsContext.Provider>
  );
};