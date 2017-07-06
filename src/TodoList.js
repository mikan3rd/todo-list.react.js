import React, { Component } from 'react';
import Todo from './Todo';


export default class TodoList extends Component {

  render() {
    const todos = [];
    for (var i = 0; i < this.props.todos.length; i++) {
      todos.push(
        <Todo
          key={i}
          index={i}
          title={this.props.todos[i].title}
          desc={this.props.todos[i].desc}
          done={this.props.todos[i].done}
          setTodoStatus={this.props.setTodoStatus}
          deleteTodoState={this.props.deleteTodoState}
        />
      );
    }

    return(
      <ul>
        {todos}
      </ul>
    );
  }
}
