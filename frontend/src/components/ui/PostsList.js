import React, { useState, useEffect } from 'react';

import Post from './Post';

import PostService from "../../services/PostService";
import FetchClient from '../../services/clients/FetchClient';

export default function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postService = new PostService(FetchClient)
        const res = await postService.getPosts()
        setPosts(res.posts)
        console.log("fetch posts response: ", res)
      } catch (err) {
        console.log("Couldn't fetch posts: ", err)
      }
    }

    fetchPosts()
  }, [])
  
  return (
    <React.Fragment>
      {posts.map(post => {
        return <Post key={post._id} username={post.username} content={post.content} />
      })}
    </React.Fragment>
  )
}
