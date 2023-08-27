import React from 'react';
import { NavLink } from "react-router-dom";

import { List, ListItem } from "@chakra-ui/react";

import { AddIcon } from '@chakra-ui/icons'

export default function Sidenav() {
  return (
    <List p="30px" color="white" fontSize="1.2em" spacing="4">
      <ListItem>
        <NavLink to="/">
          <AddIcon boxSize={4} mr="10px" />
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="new-post">
          <AddIcon boxSize={4} mr="10px" />
          Add Post
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <AddIcon boxSize={4} mr="10px" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  )
}
