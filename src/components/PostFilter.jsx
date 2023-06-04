import React from "react";
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";
const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MySelect
        options={[
          { value: "title", name: "by name" },
          { value: "description", name: "by description" },
        ]}
       onChange={(selectedSort)=>setFilter({...filter,sort:selectedSort})}
        value={filter.sort}
      ></MySelect>
      <hr></hr>
      <div style={{ "text-align": "center" }}>
        <MyInput
          placeholder="Search"
          value={filter.query}
          onChange={(event) => setFilter({ ...filter, query: event.target.value })}
        ></MyInput>
      </div>
    </div>
  );
};

export default PostFilter;
