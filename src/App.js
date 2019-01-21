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
  componentDidMount() {
    this.setState({
      input: startInput
    })
    
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div id="cont">
          <div id="textarea">
            <textarea id="editor" value={this.state.input} onChange={this.handleChange}>
            </textarea>
          </div>
            <div id="preview">
              <MarkdownPreview value={this.state.input} />
            </div>
        </div>
      </div>
    );
  }
}

const startInput = `# Live demo
## I don't understand why it is not showing table
### Tried various library's  

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>


## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Contact shefass

---------------

`
export default App;