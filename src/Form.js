import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  // aaa = 'bbb';
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" /><br/>
          <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！"></textarea><br/>
          <button type="submit">todoを作成</button>
        </form>
      </div>
    );
  }
}

// <textarea onChange={e => this.setState({text: e.target.value})}>
//   {this.state.text}
// </textarea>
// <span onClick={() => console.log(this.state.text)}>print!</span>
