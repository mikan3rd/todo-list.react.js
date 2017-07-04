import React, { Component } from 'react';

export defaut class From extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="タイトルを入力"><br/>
          <textarea placeholder="説明を入力"></textarea><br/>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}
