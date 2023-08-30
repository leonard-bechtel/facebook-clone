import React from 'react';

export default function Post(props) {
  return (
    <div style={{textAlign: "left", marginBottom: "20px"}}>
      <h3>{props.username}</h3>
      <p>{props.content}</p>
    </div>
  )
}
