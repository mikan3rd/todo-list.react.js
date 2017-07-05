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

  // handleSubmit = handleSubmit.bind(this);

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("タイトルを入力してください");
      return;
    }
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();

    if (todos.filter(todo => todo.title === title).length > 0) {
      alert("同じタイトルのtodoがあります");
      return;
    }

    todos.push({
      title: title,
      desc: desc,
      done: false
    });
    this.setState({ todos });

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  setTodoStatus(index) {
    // const todos = this.state.todos.slice();
    // const todo = todos.
    console.log("success!");
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} setTodoStatus= {() => this.setTodoStatus.bind(this)} />
      </div>
    );
  }
}
