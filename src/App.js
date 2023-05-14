import React from "react";
import { useState } from "react";
import "./styles/App.css";
import { PostList } from "./components/PostList";
// import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import AddNewPost from "./components/AddNewPost";
function App() {
  let [value, setValue] = useState("Click on button");
  let [posts, setPosts] = useState([
    { title: "Title1", description: "description1", id: 1 },
    { title: "Title2", description: "description2", id: 2 },
    { title: "Title3", description: "description3", id: 3 },
  ]);
  const createPost=(newPost)=>{
    setPosts([...posts, newPost])
  }
  const removePost=(post)=>{
    setPosts(posts.filter((p)=>p.id !==post.id))
  }
  return (
    <div className="App">
      {/* <Counter />
      <Counter />
      <input
        className="text"
        value={value}
        onChange={(event) => {
          console.log(event);
          return setValue(event.target.value);
        }}
      />
      <h1>{value}</h1> */}
      <AddNewPost create={createPost} />
      <PostList remove={removePost} posts={posts} title={"Title1"} />
    </div>
  );
}
export default App;
