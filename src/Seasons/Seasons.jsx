import React from "react";

class Seasons extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>latitude :</div>;
  }
}

export default Seasons;
