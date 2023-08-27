import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from '../../context/AuthContext';

import NewPostForm from "../../components/form/NewPostForm";
import PublicFeed from './PublicFeed';



export default function Home() {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authCtx.isAuthenticated) navigate("/login")
  }, [authCtx.isAuthenticated, navigate])

  return (
    <div style={{maxWidth: "70%", margin: "40px auto 0"}}>
      <NewPostForm />
      <PublicFeed />
    </div>
  )
}
