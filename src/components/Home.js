import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Button } from "react-bootstrap";

import Todos from "./Todos";
import NewTodo from "./NewTodo";
import ClearALLModal from "./ClearALLModal";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    todos.length && setShow(true);
  };

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <Container className="app">
      <h1 className="text-light mb-4 user-select-none">Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      {todos && <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />}
      <Button
        className="w-100"
        variant="warning"
        type="submit"
        onClick={handleShow}
      >
        CLEAR ALL
      </Button>
      <ClearALLModal
        show={show}
        setShow={setShow}
        setTodos={setTodos}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Home;