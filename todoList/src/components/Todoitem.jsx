import "../css/Todoitem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(content);
  const onChangeIsDone = () => {
    onUpdate(id);
  };
  const onDeleteTodo = () => {
    onDelete(id);
  };

  //충돌 방지

  return (
    <div className="TodoItem">
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={onChangeIsDone}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteTodo}>삭제</button>
    </div>
  );
};

export default TodoItem;
