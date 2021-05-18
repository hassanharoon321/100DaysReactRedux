import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = { lat: null, errorMessage: "" }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })

        )
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    <h1>Error : {this.state.errorMessage}</h1>
                </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }
        return (
            <Spinner message="Please Accept Location Request" />
        )
    }

    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))