import React from "react";

class ShowTime extends React.Component {
    state = { time: new Date().toLocaleTimeString() }
    componentDidMount() {
        setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>The time is: {this.state.time}</h1>
                <button onClick={()=>console.log(this.state.time)}>Click Me</button>
            </div>
        )
    }
}

export default ShowTime;