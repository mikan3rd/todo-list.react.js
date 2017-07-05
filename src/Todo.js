import React, { Component } from 'react';
import './todo.css';

export default class from extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
      title: props.title,
      desc: props.desc,
      done: props.done
    };
    console.log(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      done:!this.state.done
    });
  }

  render() {
    const link = this.state.done? '元に戻す' : '完了！';
    const className = this.state.done? 'done' : 'undone';
    return(
      <li className={className}>
        <span>{this.state.num}</span>
        <span>：{this.state.title}　　</span>
        <a href="#" onClick={this.handleClick.bind(this)}>{link}</a><br/>
        <p>{this.state.desc}</p>
      </li>
    );
  }

}
