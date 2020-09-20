import React from 'react'

class Counter extends React.Component {

    state = {
        counter: 0
    }

    handleCounter = () => {
        this.setState ({
            counter: this.state.counter+1
        })
    }

    render()  {
        return (
            <div><h1>Counter</h1>
            <button onClick={this.handleCounter}>{this.state.counter} clicked!</button>
            </div>
        )
    }
}

export default Counter

//Counter
//start 0
//3 button 
//button +1
//button -1
//set back to 0

import React from 'react'

class Counter extends React.Component {

    state = {
        counter: 0
    }

    interval = undefined

    componentDidMount() {
    this.interval = setInterval(() => {
        this.handleCounterIncrement()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleCounterIncrement = () =>
    this.setState ({
        counter: this.state.counter + 1
    })

    handleCounterDecrement = () =>
    this.setState ({
        counter: this.state.counter - 1
    })

    handleBackZero = () => 
    this.setState ({
        counter: 0
    })

    render() {
        return (
            <div className="counter">
                {this.state.counter}
                <button onClick={this.handleCounterIncrement}>Increment</button>
                <button onClick={this.handleCounterDecrement}>Decrement</button>  
                <button onClick={this.handleBackZero}>Back To Zero</button> 
            </div>
                
        )
    }

}

export default Counter



