import React from 'react'

class CounterClass extends React.Component {
    constructor() {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleDecrement = () => {
        this.setState({ count: this.count + 1 });
    }

    handleIncrement = () => {
        this.setState({ count: this.count - 1 });
    }

    render() {
        return (
            <div className='container'>
                <button onClick={handleDecrement}></button>
                <p>{count}</p>
                <button onClick={handleIncrement}></button>
            </div>
        )
    }

}

export default CounterClass