import React from 'react'
import PostItem from './PostItem'
export const PostList = (props) => {
  
  if(props.posts.length){
    return (
      <div>
          <h1 >{props.title}</h1>
          {props.posts.map((post,index)=> (<PostItem key={post.id} post={post} remove={props.remove} number={index+1}    />))}
         
      </div>
    )
  }return(<div style={{ "text-align": "center" }}> <h3>нет постов</h3></div>)
  
}
