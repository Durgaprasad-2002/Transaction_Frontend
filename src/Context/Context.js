import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider(props) {
  const [month, setmonth] = useState(3);
  function HandleMonth(e) {
    setmonth(() => e.target.value);
  }
  return (
    <AppContext.Provider value={{ month: month, HandleMonth: HandleMonth }}>
      {props.children}
    </AppContext.Provider>
  );
}
