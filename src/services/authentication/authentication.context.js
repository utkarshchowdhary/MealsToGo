import React, { useState, useEffect, createContext } from 'react';

import {
  loginRequest,
  registerRequest,
  logoutRequest,
  sessionRequest,
} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    sessionRequest()
      .then((usr) => {
        setIsLoading(false);
        setUser(usr);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setIsLoading(false);
        setError(null);
        setUser(usr.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }

    setIsLoading(true);
    registerRequest(email, password)
      .then((usr) => {
        setIsLoading(false);
        setError(null);
        setUser(usr.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    logoutRequest()
      .then(() => {
        setIsLoading(false);
        setUser(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        onLogout,
        isLoading,
        user,
        error,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
