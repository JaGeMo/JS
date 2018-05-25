let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
  // console.log("addOne", count);
}
const minusOne = () => {
  count--;
  renderCounterApp();
  // console.log("minusOne", count);
}
const reset = () => {
  count = 0;
  renderCounterApp();
  // console.log("reset", count);
}

// comment
const renderCounterApp = () => {
  let templateFour = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <br/><br/>
      <button onClick={minusOne}>-1</button>
      <br/><br/>
      <button onClick={reset}>reset</button>
    </div>
  );

  let testRoot4 = document.getElementById('app4');
  ReactDOM.render(templateFour,testRoot4);
};

renderCounterApp();
