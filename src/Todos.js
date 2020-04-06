import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { deleteTodoAction, toggleTodoAction } from "./store/action";

const Todos = (props) => {
  function handleDelete(id) {
    props.dispatch(deleteTodoAction(id));
  }

  function toggleTodo(id) {
    props.dispatch(toggleTodoAction(id));
  }
  return (
    <ul>
      {props.allTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => toggleTodo(todo.id)
              }
              checked={todo.isDone}
            />
            <p>{todo.text}</p>
            <span onClick={() => handleDelete(todo.id)}>X</span>
          </li>
        );
      })}
    </ul>
  );
};

function mapStateToProps({ allTodos, activeTab }) {
  function filterTodo(todos, tab) {
    switch (tab) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.isDone);
      case "active":
        return todos.filter((todo) => !todo.isDone);
      default:
        break;
    }
  }
  return {
    allTodos: filterTodo(allTodos, activeTab), activeTab
  };
}

export default connect(mapStateToProps)(Todos);
