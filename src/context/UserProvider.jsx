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

  const register = async (values, actions) => {
    try {
      const res = await httpService.post("/auth/register", {
        name: values.name,
        email: values.lastname,
        phone: values.email,
        password: values.password,
      });
      setUser(res.data.user);
    } catch (err) {
      alertError(err.response.data);
    }
  };
  const login = async (values, actions) => {
    try {
      const res = await httpService.post("/auth/login", values);
      sessionStorage.setItem("token", res.data.Authorization);
      if (res.data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(res.data.user);
    } catch (err) {
      alertError(err.response.data);
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
      alertError(e);
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
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
