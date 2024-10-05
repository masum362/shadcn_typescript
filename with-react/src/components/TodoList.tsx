import { Todo } from "@/types/types";
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "this is todo number 1",
    },
    {
      id: 2,
      text: "this is todo number 2",
    },
    {
      id: 3,
      text: "this is todo number 3",
    },
    {
      id: 4,
      text: "this is todo number 4",
    },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.text}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
