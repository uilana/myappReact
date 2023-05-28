import React, { useMemo } from "react";
import { useState } from "react";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import MySelect from "./components/UI/Select/MySelect";
// import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import AddNewPost from "./components/AddNewPost";
import MyInput from "./components/UI/Input/MyInput";
function App() {
  let [value, setValue] = useState("Click on button");
  let [posts, setPosts] = useState([
    { title: "Title4", description: "description3", id: 1 },
    { title: "Title2", description: "description2", id: 2 },
    { title: "Title3", description: "description4", id: 3 },
  ]);
  let [select, setSelect] = useState("title");
  let [search, setSearch] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = useMemo(() => {
    if (select)
    {return [...posts].sort((a, b) => a[select].localeCompare(b[select]))} 
    return posts
  },[select,posts])

  const searchPosts = useMemo(() => {
    return sortPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  }, [search,sortPosts]);

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
      <hr></hr>
      <MySelect
        options={[
          { value: "title", name: "по названию" },
          { value: "description", name: "по описанию" },
        ]}
        onChange={sortPosts}
        value={select}
      ></MySelect>
      <hr></hr>
      <MyInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></MyInput>
      {posts.length ? (
        <PostList remove={removePost} posts={searchPosts} title={"Title1"} />
      ) : (
        <h3>нет постов</h3>
      )}
    </div>
  );
}
export default App;
