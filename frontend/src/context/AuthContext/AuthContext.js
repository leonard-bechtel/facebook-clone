import React, { useEffect, useState } from "react";

import AuthService from "../../services/AuthService";
import FetchClient from "../../services/clients/FetchClient";

const AuthContext = React.createContext({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {}
})

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Function to verify the client-side session id and update the login status
    async function verifyLoginStatus() {
      const authService = new AuthService(FetchClient)
      const res = await authService.getLoginStatus()
      if (res.isAuthenticated === true) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    verifyLoginStatus()
  }, [isAuthenticated])

  // Create session in the backend and update login status inside the frontend
  function loginHandler() {
    setIsAuthenticated(true)
  }

  // Terminate session on the backend and update login status inside the frontend
  async function logoutHandler() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      onLogin: loginHandler,
      onLogout: logoutHandler      
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;