import React, { Component } from 'react';
import Form from './Form';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form/>
      </div>
    );
  }
}
