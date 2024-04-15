import React, { useState } from 'react'

class CounterClass extends React.Component {
    constructor() {
        // optional
        super(props)
        this.state = {
            count: 0
        }
    }

    // this.handleIncrement = this.handleIncrement.bind(this)

    handleIncrement = () => {
        this.setState({ count: this.count + 1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.count - 1 });
    }

    render() {
        return (
            <div className="container">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        )
    }
}

export default CounterClass