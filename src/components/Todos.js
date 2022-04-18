import React from "react";
import { Container } from "react-bootstrap";

import Todo from "./Todo";

const Todos = (props) => {
  return (
    <Container className="bg-dark text-warning rounded mb-3 p-1 overflow-auto todos">
      {!props.todos.length ? <p className="small">Currently no todos</p> : ""}
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </Container>
  );
};

export default Todos;
