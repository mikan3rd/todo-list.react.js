import React, { Component } from 'react';
import Form from './Form';
import Todo from './Todo';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form/>
        <Todo/>
      </div>
    );
  }
}
