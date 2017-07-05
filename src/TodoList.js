import React, { Component } from 'react';
import Todo from './Todo';


export default class TodoList extends Component {

  render() {
    const todos = [];
    for (var i = 0; i < this.props.todos.length; i++) {
      todos.push(
        <Todo
          key={i}
          title={this.props.todos[i].title}
          desc={this.props.todos[i].desc}
          done={this.props.todos[i].done}
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
