console.log("checks .. ");

let name = "Jan";

// JSX
let template = (
  <div>
    <h1>{name}</h1>
    <p>and this as well ..</p>
    <ul>
      <li>2</li>
      <li>3</li>
      <li>4 </li>
    </ul>
  </div>
  );

let user = {
  user_ID: '1',
  user_firstname: 'Horst',
  user_surname: 'Templer',
  user_location: 'L.E.'
}

function getLocation (location) {
  if (location) {
    return <h2>{'user_location: ' + location}</h2>;
  }

}

let templateTwo = (
  <div>
  <h2>{'user_id: ' + user.user_ID}</h2>
  <h2>{'user_firstname: ' + user.user_firstname}</h2>
  <h2>{'user_surname: ' + user.user_surname}</h2>
  {getLocation(user.user_location)}
  </div>
);
let testRoot1 = document.getElementById('app1');
let testRoot2 = document.getElementById('app2');


ReactDOM.render(template,testRoot1);
ReactDOM.render(templateTwo,testRoot2);


