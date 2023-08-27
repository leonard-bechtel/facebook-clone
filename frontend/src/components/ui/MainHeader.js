import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import MyButton from '../form/MyButton';

import { Flex, Heading, Spacer } from "@chakra-ui/react";

import AuthService from '../../services/AuthService';
import FetchClient from '../../services/clients/FetchClient';

export default function MainHeader() {
  const navigate = useNavigate()

  async function logoutHandler() {
    try {
      const authService = new AuthService(FetchClient)
      const res = await authService.logout()
      console.log("Logout response: ", res)
      authCtx.onLogout()
      navigate("/login")
    } catch(err) {
      console.log(err)
    }
  }

  const authCtx = useContext(AuthContext)

  return (
    <Flex alignItems="center" pl="20px" pr="20px" bg="blue.500" minHeight="120px">
      <Link to="/"><Heading color="white">Clone App</Heading></Link>
      <Spacer />
      {authCtx.isAuthenticated && (
        <>
          <Link to="/profile">
            <div style={{marginRight: "20px", color: "white", fontWeight: "bold", fontSize: "large"}}>{authCtx.username}</div>
          </Link>
          <MyButton onClick={logoutHandler} buttonType="alert" text="Logout" />
        </>
      )}
    </Flex>
  )
}

<Heading bg="blue.500" mb="80px" p="20px" color="white">Login</Heading>