import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';

import RootLayout from "./components/ui/RootLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { AuthContextProvider } from './context/AuthContext';

// Configure the router
const router = createBrowserRouter([
  { path: "/login", element: <Login />},
  { path: "/register", element: <Register />},
  { path: "/", element: <RootLayout />, children: [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> }
  ]}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>    
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
