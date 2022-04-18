import React from "react";
import { Container } from "react-bootstrap";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <Container>
      <ul>
        <li className="text-danger m-0 p-0">
          <Container className="todo text-white d-flex justify-content-between align-items-center rounded my-3 ps-0">
            <div>
              <h5 className="text-warning p-1 m-0 text-start text-uppercase">
                {title}
              </h5>
              <p className="small text-light text-capitalize text-start">
                <span className="small ps-1">{desc}</span>
              </p>
            </div>
            <div>
              <button
                className="bg-transparent border-0"
                onClick={() => {
                  handleClick(id);
                }}
              >
                <i className="trash fa fa-trash"></i>
              </button>
            </div>
          </Container>
        </li>
      </ul>
    </Container>
  );
};

export default Todo;
