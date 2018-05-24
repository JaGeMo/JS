'use strict';

console.log("app.js is running .. ");

var app = {
  title: 'title content',
  subtitle: 'subtitle content',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // syntetic event e must be called with an preventDefault

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderFormApp();
  console.log(app.options);
};

var removeOptionsButton = function removeOptionsButton() {
  app.options.length = [];
  renderFormApp();
};

var renderFormApp = function renderFormApp() {

  var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'title: ',
      app.title
    ),
    React.createElement(
      'h2',
      null,
      'subtitle: ',
      app.subtitle
    ),
    app.subtitle && app.options.length > 0 ? React.createElement(
      'h2',
      null,
      'your options are: '
    ) : React.createElement(
      'h2',
      null,
      'no options .. '
    ),
    React.createElement(
      'button',
      { onClick: removeOptionsButton },
      'test it'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'add option'
      )
    )
  );

  var testRoot3 = document.getElementById('app3');
  ReactDOM.render(templateThree, testRoot3);
};

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
