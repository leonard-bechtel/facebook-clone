import React from 'react'

import MyInput from '../../components/form/MyInput';
import MyButton from '../../components/form/MyButton';

const formStyles = {
  margin: "0 auto",
  padding: "50px",
  maxWidth: "40%",
  backgroundColor: "rgb(237, 237, 237)",
  borderRadius: "5%"
}

export default function LoginForm() {
  return (
    <div style={formStyles}>
      <form>
        <MyInput 
          htmlFor="username"
          id="username"
          placeholder="Username"
          labelText="Username"
          inputType="text"
        />
        <MyInput 
          htmlFor="password"
          id="password"
          placeholder="Password"
          labelText="Password"
          inputType="password"
        />
        <MyButton buttonType="submit" text="Login" />
      </form>
    </div>
  )
}
