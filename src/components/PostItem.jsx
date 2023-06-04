import React from "react";
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    // console.log(props);
    const remove=()=>{props.remove(props.post)}

  return (
    <div className="post">
      <div className="post__content">
      <h2>{props.number}</h2>
        <h2>{props.post.title} ,{props.key}</h2>
        <div className="description">{props.post.body}</div>
      
      </div>
      <div className="post__button">
        <MyButton onClick={remove}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
