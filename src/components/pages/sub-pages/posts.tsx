import React from "react";

class Posts extends React.Component {
    componentDidMount() {
        document.querySelectorAll(".link").forEach(element => {
            element.classList.remove("link");
        });

        document.querySelectorAll(".nav-icon").forEach(element => {
            element.setAttribute("fill", "#8e8e8e");
        });

        document.getElementById("nav")?.querySelectorAll("li").forEach(element => {
            (element as HTMLElement).style.borderTop = "none";
        });
        
        (document.getElementById("posts")?.querySelector("svg") as SVGElement).setAttribute("fill", "#262626");
        (document.getElementById("posts")?.querySelector("span") as HTMLSpanElement).classList.add("link");
        (document.getElementById("posts") as HTMLUListElement).style.borderTop = "1px solid black";
    }

    render() {
        return (
            <div className="posts">
                <h1>Posts</h1>
                <p>You have no posts yet!</p>
            </div>
        )
    }
}

export default Posts;