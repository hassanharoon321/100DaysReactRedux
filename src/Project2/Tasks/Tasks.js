import React from "react";

class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state = { numOfChar: "" }
    }
    
    render() {
        
        return (
            <form className="ui form">
                <div className="field">
                    <label>Password</label>
                    <input type="password" value={this.state.numOfChar}
                    onChange={(e)=>this.setState({numOfChar:e.target.value})}
                    />
                </div>
                {this.state.numOfChar.length < 4 ? "password must be atleast 4 characters": ""}
            </form>
        )
    }
}

export default Tasks;