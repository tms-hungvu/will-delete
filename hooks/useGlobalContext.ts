import { useContext } from "react";
import { globalContext } from "@/context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(globalContext);

  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
