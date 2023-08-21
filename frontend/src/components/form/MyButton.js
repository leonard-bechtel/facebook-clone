import React from 'react'

import { Button } from '@chakra-ui/react'

const stylesButtonBasic = {
  my: "20px",
  p: "10px",
  minWidth: "80px",
  bg: "gray.500",
  color: "black",
  textAlign: "center",
  ":hover": {
    cursor: "pointer"
  }
}

const stylesButtonSubmit = {
  ...stylesButtonBasic,
  bg: "blue.500",
  color: "white",
  ":hover": {
    bg: "blue.300"
  }
}

const stylesButtonAlert = {
  ...stylesButtonBasic,
  bg: "red.500",
  color: "white",
  ":hover": {
    bg: "red.300"
  }
}

export default function MyButton(props) {

  // Define styling of the button based on the buttonType prop
  let stylesButton = {}
  if (props.buttonType === "submit") { stylesButton = stylesButtonSubmit }
  else if (props.buttonType === "alert") { stylesButton = stylesButtonAlert }
  else { stylesButton = stylesButtonBasic }

  return (
    <Button sx={stylesButton}>{props.text}</Button>
  )
}
