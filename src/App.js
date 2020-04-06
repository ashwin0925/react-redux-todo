import React from "react";
import { connect } from "react-redux";
// import Todos from "./Todos";
// import Footer from "./Footer";
import { addTodoAction } from "./store/action";
import "./style.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }
  handleAddTodo = ({ target }) => {
    this.setState({ todoInput: target.value });
  };
  addTodo = () => {
    this.props.dispatch(addTodoAction(this.state.todoInput));
    this.setState({ todoInput: "" });
  };

  render() {
    return (
      <div className="todos">
        <h1>TO_DO</h1>
        <input
          type="text"
          placeholder="What need TO_DO"
          value={this.state.todoInput}
          onChange={this.handleAddTodo}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        {/* <Todos />
        <Footer /> */}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { allTodos: state.allTodos };
}

export default connect(mapStateToProps)(App);
