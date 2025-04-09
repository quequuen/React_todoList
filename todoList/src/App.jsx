import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

//mockData 여기 있는 이유가 뭐였지...?
//Editor.jsx에서 추가한 데이터를 Todoitem에 띄워야 하기 때문(맞나?)
//todoList의 값들을 []배열에 {}객체로 넣어줌
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Next.js 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "TypeScript 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  //mockData를 useState를 통해서 저장
  const idRef = useRef(3);
  //id는 저장될 때 렌더링이 필요없기 때문에 Ref로 빼주고 초기값을 3으로 해준다
  //(0~2는 기존 데이터들이 사용중이기 때문)
  const onCreate = (content) => {
    setTodos([
      {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
      ...todos, //먼저 작성된 list가 아래로 감
    ]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
