import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import MyInput from '../../components/form/MyInput';
import MyButton from '../../components/form/MyButton';

import AuthService from "../../services/AuthService";
import FetchClient from "../../services/clients/FetchClient";
import AuthContext from '../../context/AuthContext';

const formStyles = {
  margin: "0 auto",
  padding: "50px",
  maxWidth: "60%",
  backgroundColor: "rgb(237, 237, 237)",
  borderRadius: "5%"
}

export default function LoginForm() {
  const navigate = useNavigate()
  const toast = useToast() // alert message for failed login attempt

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
      console.log("Login response: ", res)
      if (res.isAuthenticated) {
        authCtx.onLogin()
        navigate("/")
      } else {

      }
    } catch (err) {
      console.log(err)
      // TODO: delete alert and implement proper response handling in the try block
      setUsername("")
      setPassword("")
      toast({
        title: "Login Error",
        description: "Bad credentials. Couldn't authenticate user.",
        duration: 3000,
        isClosable: false,
        status: "error",
        position: "top"
      })
    }
  }

  async function logoutHandler() {
    try {
      const authService = new AuthService(FetchClient)
      const res = await authService.logout()
      authCtx.onLogout()
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
