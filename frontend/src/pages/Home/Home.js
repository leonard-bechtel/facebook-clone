import React, { useContext, useEffect } from 'react'

import { AuthContext } from '../../context/AuthContext'

export default function Home() {
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    console.log("Is authenticated:", authCtx.isAuthenticated)
  }, [authCtx.isAuthenticated])

  return (
    <div onClick={() => {console.log(authCtx.isAuthenticated)}}>Is authenticated: {`${authCtx.isAuthenticated}`}</div>
  )
}
