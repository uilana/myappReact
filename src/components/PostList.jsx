import React from 'react'
import PostItem from './PostItem'
export const PostList = (props) => {
  return (
    <div>
        <h1 >{props.title}</h1>
        {props.posts.map((post)=> (<PostItem key={post.id} post={post} remove={props.remove}    />))}
    </div>
  )
}
