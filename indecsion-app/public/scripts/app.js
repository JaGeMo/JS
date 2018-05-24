'use strict';

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
  // console.log("addOne", count);
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  // console.log("minusOne", count);
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  // console.log("reset", count);
};

// comment
var renderCounterApp = function renderCounterApp() {
  var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  var testRoot4 = document.getElementById('app4');
  ReactDOM.render(templateFour, testRoot4);
};

renderCounterApp();
