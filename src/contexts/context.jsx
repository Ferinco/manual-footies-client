import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [chosenName, setChosenName] = useState("");
  return (
    <AppContext.Provider value={{ userEmail, setUserEmail, chosenName, setChosenName }}>
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
