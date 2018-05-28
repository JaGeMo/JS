// component based solution
class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.onShowOrHideText = this.onShowOrHideText.bind(this);
  }

  onShowOrHideText () {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
    });
  }

  render () {
    return (
      <div>
      <h1>Toggle visibility .. </h1>
      <h2>Current Visibility: {(this.state.visibility.toString())}</h2>
      <button onClick={this.onShowOrHideText}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
      {this.state.visibility && <div><p>text shown</p></div>}
    </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// first solution without components

// <button onClick={this.onShowOrHideText}>test</button>

// let visibility = false;

// let textValue = {
//   string : ''
// }
// let buttonValue = {
//   string : 'Show details'
// }

// // second block solution
// const onShowOrHideText = () => {
//   (visibility) ? textValue.string = '' :  textValue.string = 'details shown';
//   visibility = !visibility;
//   render2();
// }

// const render2 = () => {
//   let template = (
//     <div>
//       <h1>Toggle Visibility</h1>
//       <button onClick={onShowOrHideText}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       <p>{textValue.string}</p>
//       </div>
//     );

//   let testRoot = document.getElementById('app');
//   ReactDOM.render(template,testRoot);
// };

// render2();