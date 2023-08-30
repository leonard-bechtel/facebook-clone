import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast, Textarea, Flex } from '@chakra-ui/react';

import MyInput from '../../components/form/MyInput';
import MyButton from '../../components/form/MyButton';

import AuthService from "../../services/AuthService";
import FetchClient from "../../services/clients/FetchClient";
import AuthContext from '../../context/AuthContext';
import PostService from '../../services/PostService';

export default function NewPostForm() {
  const navigate = useNavigate()
  const toast = useToast()

  const authCtx = useContext(AuthContext)

  const [content, setContent] = useState("")

  async function submitHandler() {
    try {
      const postService = new PostService(FetchClient)    
      const username = authCtx.username
  
      const res = await postService.createPost({
        username,
        content
      })    
      
      console.log("response: ", res)
      toast({
        title: "Created new post",
        description: "Your post was created successfully.",
        duration: 3000,
        isClosable: false,
        status: "success",
        position: "top"
      })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form>
      <Textarea
        placeholder='Here is a sample placeholder'
        size='sm'
        resize="vertical"
        onChange={(event) => {setContent(event.target.value)}}
      />
      <Flex justifyContent="flex-end"> {/* Flexbox to align the button to the right */}
        <MyButton onClick={submitHandler} buttonType="submit" text="Submit" />
      </Flex>
    </form>
  )
}
