import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from '../../context/AuthContext';

import PostsList from '../../components/ui/PostsList';
import NewPostForm from '../../components/form/NewPostForm';



export default function Home(props) {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authCtx.isAuthenticated) navigate("/login")
  }, [authCtx.isAuthenticated, navigate])

  return (
    <div style={{maxWidth: "70%", margin: "40px auto 0"}}>
      {props.showNewPostForm && <NewPostForm />}
      <PostsList />
    </div>
  )
}
