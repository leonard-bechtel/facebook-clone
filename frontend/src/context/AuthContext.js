import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import AuthService from "../services/AuthService";
import FetchClient from "../services/clients/FetchClient";

const AuthContext = React.createContext({
  isAuthenticated: false,
  username: "",
  onLogin: () => {},
  onLogout: () => {}
})

export function AuthContextProvider({ children }) {
  const toast = useToast()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    // Function to verify the client-side session id and update the login status
    async function verifyLoginStatus() {
      const authService = new AuthService(FetchClient)
      const res = await authService.getLoginStatus()
      if (res.isAuthenticated === true) {
        setIsAuthenticated(true)
        setUsername(res.username)
      } else {
        setIsAuthenticated(false)
      }
    }
    verifyLoginStatus()
  }, [isAuthenticated])

  // Create session in the backend and update login status inside the frontend
  function loginHandler() {
    toast({
      title: "Login",
      description: "You were logged in successfully.",
      duration: 3000,
      isClosable: false,
      status: "success",
      position: "top"
    })
    setIsAuthenticated(true)
  }

  // Terminate session on the backend and update login status inside the frontend
  async function logoutHandler() {
    toast({
      title: "Logout",
      description: "You were logged out successfully.",
      duration: 3000,
      isClosable: false,
      status: "success",
      position: "top"
    })
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      username,
      onLogin: loginHandler,
      onLogout: logoutHandler      
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;