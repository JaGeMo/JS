console.log("app.js is running .. ");

let app = {
  title : 'title content',
  subtitle : 'subtitle content',
  options : []
}

const onFormSubmit = (e) => {
  e.preventDefault(); // syntetic event e must be called with an preventDefault

  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderFormApp();
  console.log(app.options);
}

const removeOptionsButton = () => {
  app.options.length = [];
  renderFormApp();
}


const onMakeDecision = () => {
  const randomMNumber = Math.floor((Math.random() * 100) + 1);
  console.log(randomMNumber);
}

const renderFormApp = () => {

  let templateThree = (
    <div>
      <h1>title: {app.title}</h1>
      <h2>subtitle: {app.subtitle}</h2>

      {(app.subtitle && app.options.length > 0) ? <h2>your options are: </h2> : <h2>no options .. </h2>}

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>decision</button><br/>
      <button onClick={removeOptionsButton}>test it</button>

      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
          <input type='text' name='option'/>
          <button>add option</button>
      </form>
    </div>
  );

  const testRoot3 = document.getElementById('app3');
  ReactDOM.render(templateThree,testRoot3);
}

// const Items = {
//   showItems() {
//     return app.options.map(option => <li>app.option.value</li>);
//   }
// }


renderFormApp();

/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app4')
);
*/