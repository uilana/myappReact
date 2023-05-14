import React from "react";
import { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
const AddNewPost = ({create}) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
  const [post, setPost] = useState({title:"", description:""})

  const add = (event) => {
    event.preventDefault()
    create({...post,id: Date.now()})
    setPost({title:"",description:""})
    
  };

  return (
    <div>
      <from>
        <MyInput
          onChange={(event) => setPost({...post,title:event.target.value})}
          value={post.title}
          type="text"
          placeholder="Назовите ваш пост"
        ></MyInput>
        <MyInput
          onChange={(event) => setPost({...post,description:event.target.value})}
          value={post.description}
          type="text"
          placeholder="Наполните пост"
        ></MyInput>
        <MyButton onClick={add}>Create</MyButton>
      </from>
    </div>
  );
};

export default AddNewPost;
