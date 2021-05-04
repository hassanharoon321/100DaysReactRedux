import React from "react";

class Seasons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //to update state we cal setState
        this.setState({lat:position.coords.latitude});
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        <h1>Latitude: {this.state.lat}</h1>
      </div>
    );
  }
}

export default Seasons;
