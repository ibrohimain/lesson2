import React, { Component } from 'react'


//bu class component
export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerID: null,
        }
    }
    componentDidMount() {
        this.state.timerID = setInterval(() => {
            this.setState((prev) => ({ count: prev.count + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.timerID);
    }


    render() {
        return (
            <div>ClassCounter :{this.state.count}
                <button
                    onClick={() => clearInterval(this.state.timerID)}
                    className='w-[60px] h-[40px] bg-blue-500 rounded-[10px] ml-[10px]'
                >
                    Stop
                </button>
            </div>
        )

    }
}
