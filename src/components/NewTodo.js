import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title && !desc) {
      setError("Input required");
    } else if (title && desc) {
      props.onAddTodo(todo);
      setTodo({ title: "", desc: "" });
      setError("");
    }
  };
  useEffect(() => {
    if (!title && desc) {
      setError("Title cannot be empty");
    } else if (title && !desc) {
      setError("Please add a description");
    } else if (title && desc) {
      setError("");
    }
  }, [title, desc]);
  return (
    <Form
      className="bg-dark text-warning mb-3 p-3 rounded"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <div className="d-flex form-field">
          <Form.Label className="user-select-none">Title:</Form.Label>
          <Form.Control
            id="title"
            type="text"
            maxLength={10}
            placeholder="Watch Tv"
            name="title"
            value={title}
            onChange={handleChange}
            autoFocus
          />
          <div className="limit text-muted small">
            <span className="small">{title && title.length + "/10"}</span>
          </div>
        </div>
        <div className="d-flex form-field">
          <Form.Label className="user-select-none">Description: </Form.Label>
          <Form.Control
            as="textarea"
            maxLength={50}
            rows={2}
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
          <div className="limit text-muted small">
            <span className="small">{desc && desc.length + "/50"}</span>
          </div>
        </div>
      </Form.Group>
      {error && <p className="small text-danger mb-2">{error}</p>}
      <Button className="w-100" variant="outline-warning" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default NewTodo;
