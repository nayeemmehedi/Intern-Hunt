import { createContext, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userRoles, setUserRoles] = useState(["intern"]);

  const login = (roles) => {
    setIsAuthenticated(true);
    setUserRoles(roles);
    location.state = {};
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRoles([]);
  };

  const updateAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  const updateRole = (role) => {
    setUserRoles([role]);
  };

  const value = {
    isAuthenticated,
    userRoles,
    login,
    logout,
    updateAuthStatus, // Include updateAuthStatus in the value object
    updateRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};