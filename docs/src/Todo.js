import React, { Component } from 'react';
import './todo.css';

export default class from extends Component {

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({
  //     done:!this.props.done
  //   });
  // }

  render() {
    const link = this.props.done? '元に戻す' : '完了！';
    const className = this.props.done? 'done' : 'undone';
    const todoDelete = this.props.done? '削除' : '';
    return(
      <li className={className}>
        <span>{this.props.countTodo}</span>
        <span>：{this.props.title}　　</span>
        <a href="#" onClick={() => this.props.setTodoStatus(this.props)}>{link}</a>　　
        <a href="#" onClick={() => this.props.deleteTodoState(this.props)}>{todoDelete}</a><br/>
        <p>{this.props.desc}</p>
      </li>
    );
  }

}
