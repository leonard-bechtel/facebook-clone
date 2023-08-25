import React, { useState } from 'react'

import MyInput from '../../components/form/MyInput';
import MyButton from '../../components/form/MyButton';

import UserService from "../../services/UserService";
import FetchClient from "../../services/clients/FetchClient";

const formStyles = {
  margin: "0 auto",
  padding: "50px",
  maxWidth: "40%",
  backgroundColor: "rgb(237, 237, 237)",
  borderRadius: "5%"
}

export default function RegisterForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRepeated, setPasswordRepeated] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  
  async function submitHandler() {
    try {
      const userService = new UserService(FetchClient)
      const res = await userService.createUser({
        username,
        email,
        password,
        firstname,
        lastname
      })
      console.log("response: ", res)
      
      // Reset form // TODO: Only reset from after a successful response
      setUsername("")
      setEmail("")
      setPassword("")
      setPasswordRepeated("")
      setFirstname("")
      setLastname("")
    } catch (err) {
      throw err
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
          htmlFor="email"
          id="email"
          placeholder="Email"
          labelText="Email"
          inputType="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
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
        <MyInput 
          htmlFor="passwordRepeated"
          id="passwordRepeated"
          placeholder="Repeat password"
          labelText="Repeat password"
          inputType="password"
          onChange={(event) => setPasswordRepeated(event.target.value)}
          value={passwordRepeated}
        />
        <MyInput 
          htmlFor="firstname"
          id="firstname"
          placeholder="Firstname"
          labelText="Firstname"
          inputType="text"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <MyInput 
          htmlFor="lastname"
          id="lastname"
          placeholder="Lastname"
          labelText="Lastname"
          inputType="text"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <MyButton onClick={submitHandler} buttonType="submit" text="Login" />
      </form>
    </div>
  )
}

// TODO: Implement form validation logic and render submit button only when
// the correctness of the inputs is validated
