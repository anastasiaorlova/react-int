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




