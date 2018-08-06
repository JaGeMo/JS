class IndecisionApp extends React.Component {

  constructor (props) {
    super(props);
    this.handleDeleteIOptions = this.handleDeleteIOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddNewOption = this.handleAddNewOption.bind(this);
    this.state = {
      title : "title value",
      subtitle : "subtitle value",
      options : ["first", "second", "third"]
    };

  }

  handlePick() {
    alert(this.state.options[Math.floor(Math.random() *3)]);
  }

  handleDeleteIOptions () { // function that needs to be transferred to child components to update parent's state props
    this.setState (() => {
        return {
          options: []
        };
    });
  }

  handleAddNewOption (option) {
    console.log("new option tested .. ");
    if (!option) {
      console.log("no item submitted");
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      console.log("this option already exists");
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    return (
      <div>
        <p>wrapper ..</p>

        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteIOptions={this.handleDeleteIOptions}
        />

        <Option />

        <AddOption
          handleAddNewOption={this.handleAddNewOption}
        />

      </div>
    )
  };
}
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Title: {this.props.title}</h3>
        <h4>Subtitle: {this.props.subtitle}</h4>
      </div>
    )
  };
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>click me .. </button>
      </div>
    )
  };
}

class Options extends React.Component {
  render() {
    const counter = this.props.options.length;
    return (
      <div>
          <div>
            <button onClick={this.props.handleDeleteIOptions}> remove all .. </button>
            {this.props.options.map((option) => (<Option key={option} optionText={option} />))}
          </div>
      </div>
    )
  };
}

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
  constructor (props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    };
  }

  handleAddOption (event) {
    event.preventDefault(); // prevents a form submission and a full page refresh
    const tmpVar = event.target.elements.option.value.trim();
    const error = this.props.handleAddNewOption(tmpVar)

    this.setState (() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type='text' name='option'/>
        <button>add option</button>
      </form>
    </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));