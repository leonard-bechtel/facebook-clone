import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from "@chakra-ui/react";

import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Sidenav from "../ui/Sidenav";

// TODO: if user is not authenticated => redirect to login page (use useContext!)

export default function RootLayout() {
  return (
    <React.Fragment>
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem
          as="aside"
          colSpan="1"
          bg="gray.500"
          minHeight="100vh"
        >
          <Sidenav />
        </GridItem>
        <GridItem
          as="main"
          colSpan="6"
        >
          <div style={{textAlign: "center"}}>
            <MainHeader />
            <Outlet />
          </div>
        </GridItem>
      </Grid>
      <MainFooter />
    </React.Fragment>
  )
}

