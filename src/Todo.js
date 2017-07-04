import React, { Component } from 'react';

export default class from extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "これがタイトル",
      desc: props.desc,
      done: props.done
    };
  }

  render() {
    return(
      <li>
        <span>{this.state.title}：</span>
        <a href="#">リンク</a><br/>
        <p>{this.state.desc}</p>
      </li>
    );
  }

}
