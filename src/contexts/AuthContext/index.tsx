import React, { ReactNode, useEffect, useState, createContext } from "react";
import { isMobile } from "react-device-detect";

interface AuthContextProps {
  user: UserProps;
  handleUser: (user: UserProps) => void;
  handleLogout: () => void;
  isMobileDevice: boolean;
}

interface UserProps {
  username: string | null | undefined;
  color: string | null | undefined;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({ username: null, color: null });

  useEffect(() => {
    let userLocal = localStorage.getItem("user");
    if (userLocal) {
      let parsed: UserProps = JSON.parse(userLocal);
      setUser(parsed);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser({ username: null, color: null });
  }

  function handleUser(user: UserProps) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider
      value={{ user, handleUser, handleLogout, isMobileDevice: isMobile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
