import { useState } from "react";
import "../css/List.css";
import TodoItem from "./Todoitem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterTodoData = getFilterData();
  return (
    <div className="List">
      <h1>Todo List🌱</h1>
      <div className="search_area">
        <input
          type="text"
          className="search_input"
          placeholder="검색어를 입력해주세요"
          value={search}
          onChange={onChangeSearch}
        />
        <div className="lists">
          {filterTodoData.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
