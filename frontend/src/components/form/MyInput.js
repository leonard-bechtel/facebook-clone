import React from 'react'
import { Input, FormLabel, FormControl, Box } from '@chakra-ui/react';

const stylesContainer = {
  m: "30px 0"
}

export default function MyInput(props) {
  return (
    <Box>
      <FormControl sx={stylesContainer} isRequired={props.isRequired ? true : false}>
        <FormLabel htmlFor={props.htmlFor}>{props.labelText}</FormLabel>
        <Input 
          bg="white" 
          type={props.inputType} 
          id={props.id} 
          placeholder={props.placeholder} 
          onChange={props.onChange}
          value={props.value}
        />
      </FormControl>
    </Box>
  )
}
