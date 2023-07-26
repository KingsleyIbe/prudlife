import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [userInfo, setUserinfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserinfo }}>
      {children}
    </UserContext.Provider>
  );
};
