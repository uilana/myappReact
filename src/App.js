import React from "react";
import { useState } from "react";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import Counter from "./components/Counter";
function App() {
  let [value, setValue] = useState("Click on button");
  let [posts, setPosts] = useState([
        {title: "Title1", description: "description1", id:1},
        {title: "Title2", description: "description2", id:2},
        {title: "Title3", description: "description3", id:3}])
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
      {posts.map((post)=> (<PostItem post={post} key={post.id}  />))}
      
      
    </div>
  );
}
export default App;
