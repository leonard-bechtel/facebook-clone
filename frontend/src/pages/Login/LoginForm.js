import React, { useState, useContext } from 'react'

import MyInput from '../../components/form/MyInput';
import MyButton from '../../components/form/MyButton';

import AuthService from "../../services/AuthService";
import FetchClient from "../../services/clients/FetchClient";
import AuthContext from '../../context/AuthContext/AuthContext';

const formStyles = {
  margin: "0 auto",
  padding: "50px",
  maxWidth: "40%",
  backgroundColor: "rgb(237, 237, 237)",
  borderRadius: "5%"
}

export default function LoginForm() {
  const authCtx = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function testLoginHandler() {
    try {
      const authService = new AuthService(FetchClient)
      const res = await authService.getLoginStatus()
      console.log(res)
    }
    catch (err) {
      throw err
    }
  }
  
  async function submitHandler() {
    try {
      const authService = new AuthService(FetchClient)
      const res = await authService.login(username, password)
      console.log("username: ", username, " password: ", password)
      console.log("Response login", res)
      if (res.isAuthenticated) authCtx.onLogin()
    } catch (err) {
      console.log(err)
    }
  }

  async function logoutHandler() {
    try {
      const authService = new AuthService(FetchClient)
      const res = await authService.logout()
      authCtx.onLogout()
      console.log("Response logout", res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div style={formStyles}>
      <form>
        <MyInput 
          htmlFor="username"
          id="username"
          placeholder="Username"
          labelText="Username"
          inputType="text"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <MyInput 
          htmlFor="password"
          id="password"
          placeholder="Password"
          labelText="Password"
          inputType="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <MyButton onClick={submitHandler} buttonType="submit" text="Login" />
        <MyButton onClick={testLoginHandler} buttonType="submit" text="Login Test" />
        {authCtx.isAuthenticated && <MyButton onClick={logoutHandler} buttonType="submit" text="Logout" />}
      </form>
    </div>
  )
}
