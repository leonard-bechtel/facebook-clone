import React from 'react';

import { Flex, Heading, Spacer } from "@chakra-ui/react";

export default function MainFooter() {
  return (
    <Flex alignItems="center" pl="20px" pr="20px" bg="blue.600" mb="0px" minHeight="200px">
      <Heading as="h2" color="white">Footer</Heading>
      <Spacer />
    </Flex>
  )
}
