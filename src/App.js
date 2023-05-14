import React from "react";
import { useState } from "react";
import "./styles/App.css"
import { PostList } from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import Input from "./components/UI/Input/Input";
function App() {
  let [value, setValue] = useState("Click on button");
  let [posts, setPosts] = useState([
        {title: "Title1", description: "description1", id:1},
        {title: "Title2", description: "description2", id:2},
        {title: "Title3", description: "description3", id:3}])
    let [values, setValues] = useState([
        {title: "Title5", description: "description8", id:4},
        {title: "Title6", description: "description9", id:5},
        {title: "Title7", description: "description12", id:6}
    ])
  return (
    <div className="App">
      {
      /* <Counter />
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
      
      <PostList posts={posts} title={"Title1"}  />
      <PostList posts={values} title={"TITLE"}  />
    
      <MyButton disabled>create</MyButton>
      <Input placeholder="Ввод"></Input>
    </div>
  );
}
export default App;
