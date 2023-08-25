import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import MyButton from '../form/MyButton';

import { Flex, Heading } from "@chakra-ui/react";

export default function MainHeader() {
  const authCtx = useContext(AuthContext)

  return (
    <div>
      <h1>MainHeader</h1>
      <h2>is authenticated: {`${authCtx.isAuthenticated}`}</h2>
      <MyButton onClick={authCtx.onLogout} buttonType="alert" text="Logout" />
    </div>
  )
}
