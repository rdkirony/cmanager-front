import React from "react";

interface IThemeContext {
    dark: string;
    toggleDark?: () => void;
  }
  
  const defaultState = {
    dark: "Eai",
  };
  
  const ThemeContext = React.createContext<IThemeContext>(defaultState);
  

  
  const ThemeProvider: React.FC<any> = ({ children} ) => {
    const [dark, setDark] = React.useState(defaultState.dark);
  
    const toggleDark = () => {
      setDark("Oba");
    };
  
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  
  const ToggleDarkMode = () => {
    const { dark, toggleDark } = React.useContext(ThemeContext);
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      toggleDark? toggleDark(): null;
    };
    return (
      <>
        <h1>{dark}</h1>
        <button onClick={handleOnClick}>Toggle dark mode</button>
      </>
    );
  };
  
export function Test () {
    return (
      <ThemeProvider>
        <ToggleDarkMode />
      </ThemeProvider>
    );
};