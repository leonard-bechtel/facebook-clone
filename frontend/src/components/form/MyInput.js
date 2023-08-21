import React from 'react'
import { Input, FormLabel, FormControl, Box } from '@chakra-ui/react';

const stylesContainer = {
  m: "30px 0"
}

export default function MyInput(props) {
  return (
    <Box>
      <FormControl sx={stylesContainer}>
        <FormLabel htmlFor={props.htmlFor}>{props.labelText}</FormLabel>
        <Input type={props.inputType} id={props.id} placeholder={props.placeholder} />
      </FormControl>
    </Box>
  )
}
