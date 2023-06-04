import React, { useMemo } from "react";
import { useState } from "react";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MySelect from "./components/UI/Select/MySelect";
import PostServes from "./api/PostServes";
// import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import AddNewPost from "./components/AddNewPost";
import MyInput from "./components/UI/Input/MyInput";
function App() {
  let [value, setValue] = useState("Click on button");
  let [posts, setPosts] = useState([]);
  let [filter, setFilter] = useState({ sort: "", query: "" });
  let response = PostServes.getAll(10, 2);
  setPosts(response.data);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const searchAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <AddNewPost create={createPost} />
      <hr></hr>

      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={searchAndSortedPosts}
        title={"Title1"}
      />
    </div>
  );
}
export default App;
