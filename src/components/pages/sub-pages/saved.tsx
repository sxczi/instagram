import React from "react";

class Saved extends React.Component {
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
      document.getElementById("saved")?.querySelector("svg") as SVGElement
    ).setAttribute("fill", "#262626");
    (
      document.getElementById("saved")?.querySelector("span") as HTMLSpanElement
    ).classList.add("link");
    (document.getElementById("saved") as HTMLUListElement).style.borderTop =
      "1px solid black";
  }

  render() {
    return (
      <div className="saved">
        <h1>Saved</h1>
        <p>Posts that you save will appear here.</p>
      </div>
    );
  }
}

export default Saved;
