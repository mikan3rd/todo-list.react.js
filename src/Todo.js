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
    return(
      <li className={className}>
        <span>{this.props.index + 1}</span>
        <span>：{this.props.title}　　</span>
        <a href="#" onClick={() => this.props.setTodoStatus(this.props)}>{link}</a><br/>
        <p>{this.props.desc}</p>
      </li>
    );
  }

}
