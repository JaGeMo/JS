"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = { count: 0 };
        _this.handlePlusOne = _this.handlePlusOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "handlePlusOne",
        value: function handlePlusOne() {
            // setState is a standard function
            this.setState(function (prevState) {
                // prevState needs to be input of the anonymous function
                return {
                    count: prevState.count + 1 // only use the props you would like to modify
                };
            });
            console.log(this.count++);
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                // prevState needs to be input of the anonymous function
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            alert("reset");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.handlePlusOne },
                    "+1"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "reset"
                ),
                React.createElement("br", null),
                React.createElement("br", null)
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// class Counter extends React.Component {
//     constructor (props) {
//         super(props);
//         let count = 0;
//         this.count = count;
//         this.handlePlusOne = this.handlePlusOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//     }

//     handlePlusOne () {
//         this.count++;
//         console.log(this.count);
//         this.render();
//     }

//     handleMinusOne () {
//         this.count--;
//         console.log(this.count);
//         this.render();
//     }

//     render () {
//     return (
//         <div>
//             <p>{this.count}</p>
//             <button onClick={this.handlePlusOne}>+1</button><br/><br/>
//             <button onClick={this.handleMinusOne}>-1</button><br/><br/>
//         </div>
//     )
//     };
// }

// ReactDOM.render(<Counter />,document.getElementById('app'));
