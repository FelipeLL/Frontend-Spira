import React, { createContext, useEffect, useState } from "react";
import httpService from "../services/httpService";
import { alertError } from "../utilities/Alerts";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setIsAdmin(false);
    setUser(null);
  };

  const login = async (values) => {
    try {
      const res = await httpService.post("/auth/login", values);
      sessionStorage.setItem("token", res.data.Authorization);
      if (res.data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(res.data.user);
    } catch (err) {
      alertError(err.response.data.error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      if (data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(data.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        user,
        setUser,
        logout,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
