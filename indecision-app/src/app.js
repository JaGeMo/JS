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
  handleClick () {
    alert("clicked .. ");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me .. </button>
      </div>
    )
  };
}

class Options extends React.Component {
  removeAll () {
    alert("test me ..")
  }
  render() {
    const counter = this.props.options.length;
    return (
      <div>
          <div>
            <button onClick={this.removeAll}> remove all .. </button>
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
  handleAddOption (event) {
    event.preventDefault(); // prevents a form submission and a full page refresh
    const tmpVar = event.target.elements.option.value;
    if(tmpVar) (alert(tmpVar));

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type='text' name='option'/>
        <button>add option</button>
        </form>
    </div>
    )
  };
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));