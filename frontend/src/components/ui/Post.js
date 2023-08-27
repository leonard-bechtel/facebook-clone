import React from 'react';

export default function Post(props) {
  return (
    <>
      <h3>{props.username}</h3>
      <p>{props.content}</p>
    </>
  )
}
