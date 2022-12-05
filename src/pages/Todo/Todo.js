import { useState } from "react";

const ToDo = () => {
  const [showActiveTodos, setShowActiveTodos] = useState(false);
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const addNewTodo = () => {
    const updatedTodos = [...todos, createTodo(inputValue)];
    setTodos(updatedTodos);
  };

  const filterTodos = (onlyActives = false) => {
    const res = onlyActives
      ? todos.filter((el) => el.completed !== true)
      : todos;
    return res;
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showActiveTodos}
            onChange={(e) => setShowActiveTodos(e.target.checked)}
          />
          Show only active todos
        </label>
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {filterTodos(showActiveTodos).map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{filterTodos(true).length} todos left</footer>
    </>
  );
};

export default ToDo;

let nextId = 0;

export function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export const initialTodos = [
  createTodo("Get apples", true),
  createTodo("Get oranges", true),
  createTodo("Get carrots"),
];
