'use strict';

var visibility = false;

var textValue = {
  string: ''
};
var buttonValue = {
  string: 'Show details'

  // first block solution
  /*
  const onShowOrHideText = () => {
    (textValue.string == '') ? textValue.string = 'details shown' : textValue.string = '';
    (buttonValue.string == 'Show details') ? buttonValue.string= 'Hide details' : buttonValue.string= 'Show details' ;
    render();
  }
  
  const render = () => {
    let templateFour = (
      <div>
        <h1>Toggle Visibility</h1>
        <button onClick={onShowOrHideText}>{buttonValue.string}</button>
        <p>{textValue.string}</p>
        </div>
      );
  
    let testRoot4 = document.getElementById('app4');
    ReactDOM.render(templateFour,testRoot4);
  };
  
  render();
  */

  // second block solution
};var onShowOrHideText = function onShowOrHideText() {
  visibility ? textValue.string = '' : textValue.string = 'details shown';
  visibility = !visibility;
  render2();
};

var render2 = function render2() {
  var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Toggle Visibility'
    ),
    React.createElement(
      'button',
      { onClick: onShowOrHideText },
      visibility ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      null,
      textValue.string
    )
  );

  var testRoot4 = document.getElementById('app4');
  ReactDOM.render(templateFour, testRoot4);
};

render2();
