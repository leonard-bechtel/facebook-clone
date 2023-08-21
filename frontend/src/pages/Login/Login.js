import React from 'react';
import LoginForm from './LoginForm';

import { Box, Heading } from '@chakra-ui/react';

export default function Login() {
  return (
    <>
      <Box>
        <Heading bg="blue.500" mb="80px" p="20px" color="white">Login</Heading>
      </Box>
      <LoginForm />
    </>
  )
}
