import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      countDone: 0,
      level: 1,
      num: 1,
      nextLevel: 1
    };
  }

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
      done: false,
      index: todos.length
    });
    this.setState({ todos });

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  setTodoStatus(clickTodo) {
    let countDone = this.state.countDone;
    let level = this.state.level;
    let num = this.state.num;
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.index];
    todo.done = !todo.done;
    todos[clickTodo] = todo;

    if (todo.done) {
      countDone++;
    } else {
      countDone--;
    }

   while (countDone >= num) {
      level++;
      if (num === 0) {
        num += 2;
      } else {
      num += num;
      }
      console.log(countDone, num);
    }
    const nextLevel = num - countDone;

    this.setState({ todos });
    this.setState({ countDone });
    this.setState({ level });
    this.setState({ num });
    this.setState({ nextLevel });
  }

  deleteTodoState(clickTodo) {
    const todos = this.state.todos.slice();
    todos.splice(clickTodo, 1);
    this.setState({ todos });
  }

  render() {
    let undoneNum = 0;

    this.state.todos.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });

    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <h2>完了：{this.state.countDone}　　残り：{undoneNum}</h2>
        <h3>Lv. {this.state.level}　(次のレベルまで{Math.round(this.state.nextLevel)})</h3>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          deleteTodoState={this.deleteTodoState.bind(this)}
          />
      </div>
    );
  }
}
