"use strict";

console.log("checks .. ");

// functions
function getLocation(location) {
  if (location) {
    return React.createElement(
      "h2",
      null,
      'user_location: ' + location
    );
  }
}

// JSX
var name = "Jan";
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    name
  ),
  React.createElement(
    "p",
    null,
    "and this as well .."
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "2"
    ),
    React.createElement(
      "li",
      null,
      "3"
    ),
    React.createElement(
      "li",
      null,
      "4 "
    )
  )
);

// objects
var user = {
  user_ID: '1',
  user_firstname: 'Horst',
  user_surname: '',
  user_age: '17',
  user_location: 'L.E.'
};

var app = {
  title: 'title content',
  subtitle: 'subtitle content',
  options: ['one', 'two', 'three']

  // JSX
};var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    'user_id: ' + user.user_ID
  ),
  React.createElement(
    "h2",
    null,
    'user_firstname: ' + user.user_firstname
  ),
  React.createElement(
    "h2",
    null,
    user.user_surname ? user.user_surname : 'user_surname: Anonymous'
  ),
  user.user_age && user.user_age >= 18 && React.createElement(
    "h2",
    null,
    'user_age: ' + user.user_age
  ),
  getLocation(user.user_location)
); // including function call

var templateThree = React.createElement(
  "div",
  null,
  app.subtitle && app.options.length > 0 ? React.createElement(
    "h2",
    null,
    "your options are: "
  ) : React.createElement(
    "h2",
    null,
    "no options .. "
  ),
  React.createElement(
    "h1",
    null,
    "subtitle: ",
    app.subtitle
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      app.options[0]
    ),
    React.createElement(
      "li",
      null,
      app.options[1]
    ),
    React.createElement(
      "li",
      null,
      app.options[2]
    )
  )
);

// let testRoot1 = document.getElementById('app1');
// let testRoot2 = document.getElementById('app2');
// let testRoot3 = document.getElementById('app3');


// ReactDOM.render(template,testRoot1);
// ReactDOM.render(templateTwo,testRoot2);
// ReactDOM.render(templateThree,testRoot3);


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
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  var testRoot4 = document.getElementById('app4');
  ReactDOM.render(templateFour, testRoot4);
};

renderCounterApp();
