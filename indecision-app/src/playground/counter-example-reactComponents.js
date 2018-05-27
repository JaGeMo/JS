class Counter extends React.Component {
    constructor (props) {
        super(props);
        let count = 0;
        this.count = count;
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
    }

    handlePlusOne () {
        this.count++;
        console.log(this.count);
        this.render();
    }

    handleMinusOne () {
        this.count--;
        console.log(this.count);
        this.render();
    }

    render () {
    return (
        <div>
            <p>{this.count}</p>
            <button onClick={this.handlePlusOne}>+1</button><br/><br/>
            <button onClick={this.handleMinusOne}>-1</button><br/><br/>
        </div>
    )
    };
}

ReactDOM.render(<Counter />,document.getElementById('app'));