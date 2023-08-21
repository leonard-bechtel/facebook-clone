import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

// TODO: if user is not authenticated => redirect to login page (use useContext!)

export default function RootLayout() {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  )
}
