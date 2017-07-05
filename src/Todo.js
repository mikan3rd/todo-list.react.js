import React, { Component } from 'react';
import './todo.css';

export default class from extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      desc: props.desc,
      done: props.done
    };
  }

  render() {
    return(
      <li className="todo">
        <span>{this.state.title}：</span>
        <a href="">リンク</a><br/>
        <p>{this.state.desc}</p>
      </li>
    );
  }

}
