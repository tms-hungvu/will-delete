import { ReactNode, createContext, useContext, useState } from "react";

const globalContext = createContext({
  showSidebar: true,
  setShowSidebar: (prevValue: boolean) => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const value = { showSidebar, setShowSidebar };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };
