import "./Photo.css";
import React, { Component } from "react";

function mouseOver() {
  console.log("Mouse over")
}

function mouseOut(x) {
  console.log("Mouse out")
}

class Photo extends Component {
  render() {
    return (
      <div className="col-12" id="photox">
        <img
          alt="ph"
          className="photo"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?cs=srgb&dl=pexels-david-bartus-610293.jpg&fm=jpg"
        />
      </div>
    );
  }
}

export default Photo;
