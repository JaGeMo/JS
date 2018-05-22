"use strict";

console.log("checks .. ");

var name = "Jan";

// JSX
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

var user = {
  user_ID: '1',
  user_firstname: 'Horst',
  user_surname: 'Templer',
  user_location: 'L.E.'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "h2",
      null,
      'user_location: ' + location
    );
  }
}

var templateTwo = React.createElement(
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
    'user_surname: ' + user.user_surname
  ),
  getLocation(user.user_location)
);
var testRoot1 = document.getElementById('app1');
var testRoot2 = document.getElementById('app2');

ReactDOM.render(template, testRoot1);
ReactDOM.render(templateTwo, testRoot2);
