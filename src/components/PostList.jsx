import React from 'react'
import PostItem from './PostItem'
export const PostList = (props) => {
  return (
    <div>
        <h1 style={{ color: "#4287f5"}}>{props.title}</h1>
        {props.posts.map((post)=> (<PostItem key={post.id} post={post} remove={props.remove}    />))}
    </div>
  )
}
