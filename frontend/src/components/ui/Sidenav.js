import React from 'react';
import { NavLink } from "react-router-dom";

import { List, ListItem } from "@chakra-ui/react";

export default function Sidenav() {
  return (
    <List p="30px" color="white" fontSize="1.2em" spacing="4">
      <ListItem>
        <NavLink to="/">
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="new-post">
          Add Post
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/personal-feed">
          Personal Feed
        </NavLink>
      </ListItem>
    </List>
  )
}
