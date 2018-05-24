let visibility = false;

let textValue = {
  string : ''
}
let buttonValue = {
  string : 'Show details'
}

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
const onShowOrHideText = () => {
  (visibility) ? textValue.string = '' :  textValue.string = 'details shown';
  visibility = !visibility;
  render2();
}

const render2 = () => {
  let templateFour = (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={onShowOrHideText}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      <p>{textValue.string}</p>
      </div>
    );

  let testRoot4 = document.getElementById('app4');
  ReactDOM.render(templateFour,testRoot4);
};

render2();