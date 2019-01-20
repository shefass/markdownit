import React, { Component } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: null
    }
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div id="textarea">
          <textarea id="editor" value={this.state.input} onChange={this.handleChange}>
          </textarea>
        </div>
        <div id="preview">
          <MarkdownPreview value={this.state.input} />
        </div>
      </div>
    );
  }
}

export default App;