class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {count: 0};
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handlePlusOne () {  // setState is a standard function
        this.setState((prevState) => { // prevState needs to be input of the anonymous function
            return {
                count: prevState.count + 1 // only use the props you would like to modify
            };
        });
        console.log(this.count++);
    }


    handleMinusOne () {
        this.setState((prevState) => { // prevState needs to be input of the anonymous function
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset () {
        this.setState(() => { // prevState needs to be input of the anonymous function
            return {
                count: 0
            };
        });
    }

    render () {
    return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handlePlusOne}>+1</button><br/><br/>
            <button onClick={this.handleMinusOne}>-1</button><br/><br/>
            <button onClick={this.handleReset}>reset</button><br/><br/>
        </div>
    )
    };
}

ReactDOM.render(<Counter />,document.getElementById('app'));




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