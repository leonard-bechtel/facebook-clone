import React from 'react';
import RegisterForm from "./RegisterForm";

import { Box, Heading } from '@chakra-ui/react';

export default function Register() {
  return (
    <>
      <Box>
        <Heading bg="purple.500" mb="80px" p="20px" color="white">Register</Heading>
      </Box>
      <RegisterForm />
    </>
  )
}
