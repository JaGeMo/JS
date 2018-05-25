class IndecisionApp extends React.Component {

  render() {
    const title = "title value";
    const subtitle = "subtitle value";
    const options = ["first", "second", "third"];

    return (
      <div>
        <p>wrapper ..</p>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <Option />
        <AddOption />
      </div>
    )
  };
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>header ..</h3>
      </div>
    )
  };
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>ON</button>
      </div>
    )
  };
}

class Options extends React.Component {
  render() {
    const counter = this.props.options.length;
    return (
      <div>
        <label>multiple options .. </label><br/>
          <div>
            <p>{counter}</p>
            {this.props.options.map((option) => (<Option key={option} optionText={option} />))}
            </div>
      </div>
    )
  };
}

// <Option key={options} optionText={options} />
// {this.props.options.map((option) => (<p>{option}</p>))}

class Option extends React.Component {
  render() {
    return (
      <div id={this.props.optionText}>
        <p>{this.props.optionText}</p>
      </div>
    )
  };
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <label>add option</label>
      </div>
    )
  };
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));