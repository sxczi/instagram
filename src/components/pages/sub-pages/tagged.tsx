import React from "react";

class Tagged extends React.Component {
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
      document.getElementById("tagged")?.querySelector("svg") as SVGElement
    ).setAttribute("fill", "#262626");
    (
      document
        .getElementById("tagged")
        ?.querySelector("span") as HTMLSpanElement
    ).classList.add("link");
    (document.getElementById("tagged") as HTMLUListElement).style.borderTop =
      "1px solid black";
  }

  render() {
    return (
      <div className="tagged">
        <h1>Photos of you</h1>
        <p>When people tag you in photos, they'll appear here.</p>
      </div>
    );
  }
}

export default Tagged;
