import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [myState, setMyState] = useState({});

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
}
