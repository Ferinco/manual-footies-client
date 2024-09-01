import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [pass, setPass] = useState("");
  const [activeBar, setActiveBar] = useState(1);
  const [settingsTab, setSettingsTab] = useState(0);
  return (
    <AppContext.Provider value={{ userEmail, setUserEmail, chosenName, setChosenName, pass, setPass, activeBar, setActiveBar, settingsTab, setSettingsTab }}>
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
