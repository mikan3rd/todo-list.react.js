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
    console.log(e.target.elements);
    const title = e.target.elements[0].value;
    const desc = e.target.elements[1].value;
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}
