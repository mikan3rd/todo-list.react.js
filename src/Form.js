import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトルを入力"/><br/>
          <textarea name="desc" placeholder="説明を入力"></textarea><br/>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}
