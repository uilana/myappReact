import React from "react";

const PostItem = (props) => {
    console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <h2>{props.post.title} ,{props.key}</h2>
        <div className="description">{props.post.description}</div>
      </div>
      <div className="post__button">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
