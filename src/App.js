import React from 'react';
const Hljs = require("highlight.js");
window.hljs = Hljs;
require("highlightjs-line-numbers.js");
Hljs.highlightAll();
        Hljs.initLineNumbersOnLoad({
          singleLine: true
        });
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'https://www.example.com/', code: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch(`https://cors-anywhere.herokuapp.com/${this.state.value}`)
    .then((resp) => resp.text())
    .then((text) => {
      this.setState({code: text})
    })
    .then(() => {
        Hljs.highlightAll();
        Hljs.initLineNumbersOnLoad({
          singleLine: true
        });
    })
    .catch((e) => {
      console.log(e)
    })
    event.preventDefault();
  }

  render() {
    return(<div className="container">
    <h1>View Source Kids Edition</h1>
    <p>Google Chrome now allows ADMINISTATORS to block view-source with Enterprise Policies and that's mean <span role="img" aria-label="emoji">😭</span> so I fixed the bug <span role="img" aria-label="emoji">😼</span>
      <br /><br />
      Remember kids, ask your parents for permission before going online!
      <br /><br />
      {/* This website requires you to install <a href="https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai" style={{
        color: 'white',
      }}>Chrome Extension</a> to bypass CORS Restrictions. We are working on a better bypass in the near future. */}

      This website requires you to opt-in at <a href="https://cors-anywhere.herokuapp.com/https://www.example.com/"></a> to bypass CORS Restrictions. We are working on an opt-inless solution in the near future.
      <br /><br />
      <strong>Enter website URL:</strong><br />
      <form onSubmit={this.handleSubmit}>
      <input value={this.state.value} onChange={this.handleChange} className='urlInput' type='url' />
      <input type='submit' className='urlSubmit' value='Can I please see the source?' />
      </form>
      </p>
      <pre className='source'><code id="sourceCode">{this.state.code}</code></pre>
  </div>)
  }
}

export default App;
