import React, { useState } from "react";

const AuthContext = React.createContext({
  isAuthenticated: null,
  updateAuthContextValue: () => {}
})

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Function to update the context value inside child components
  function updateAuthContextValue(newValue) {
    setIsAuthenticated(newValue)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      updateAuthContextValue
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };