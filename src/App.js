import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos;
    todos.push({
      title: title,
      desc: desc,
      done: false
    });
    console.log(todos);
    this.setState({ todos: todos});
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
