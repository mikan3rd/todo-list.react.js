import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="タイトルを入力"/><br/>
          <textarea placeholder="説明を入力"></textarea><br/>
          <button type="submit">送信</button>
          <p className="test">テストォォォォォ</p>
        </form>
      </div>
    );
  }
}
