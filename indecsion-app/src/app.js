console.log("checks .. ");

let app = {
  title : 'title content',
  subtitle : 'subtitle content',
  options : ['one', 'two', 'three']
}

let templateThree = (
  <div>
    {(app.subtitle && app.options.length > 0) ? <h2>your options are: </h2> : <h2>no options .. </h2>}
    <h1>subtitle: {app.subtitle}</h1>
    <ul>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
      <li>{app.options[2]}</li>
    </ul>
    </div>
);

let testRoot3 = document.getElementById('app3');
ReactDOM.render(templateThree,testRoot3);
