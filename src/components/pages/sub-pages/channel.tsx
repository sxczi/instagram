import React from "react";

class Channel extends React.Component {
  componentDidMount() {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("link");
    });

    document.querySelectorAll(".nav-icon").forEach((element) => {
      element.setAttribute("fill", "#8e8e8e");
    });

    document
      .getElementById("nav")
      ?.querySelectorAll("li")
      .forEach((element) => {
        (element as HTMLElement).style.borderTop = "none";
      });

    (
      document.getElementById("channel")?.querySelector("svg") as SVGElement
    ).setAttribute("fill", "#262626");
    (
      document
        .getElementById("channel")
        ?.querySelector("span") as HTMLSpanElement
    ).classList.add("link");
    (document.getElementById("channel") as HTMLUListElement).style.borderTop =
      "1px solid black";
  }

  render() {
    return (
      <div className="channel">
        <h1>Upload a Video</h1>
        <p>Videos must be between 1 and 60 minutes long.</p>
        <button>Upload</button>
      </div>
    );
  }
}

export default Channel;
