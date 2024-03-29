import React from "react";

import Footer from "../footer";

import Channel from "./sub-pages/channel";
import Tagged from "./sub-pages/tagged";
import Saved from "./sub-pages/saved";
import Posts from "./sub-pages/posts";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

interface ProfileState {
  profile: {
    pfpUrl: string;
    username: string;
    name: string;
    followers: string;
    following: string;
    posts: string;
    bio: string;
  };
}

class InstagramProfile extends React.Component<any, ProfileState> {
  state = {
    profile: {
      pfpUrl: "/assets/pfp.jpg",
      username: "",
      name: "",
      followers: "0",
      following: "0",
      posts: "0",
      bio: "",
    },
  };

  handleNavStylingLoad = (element: any) => {
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

    element.setAttribute("fill", "#262626");
    element.parentElement.querySelector("span").classList.add("link");
    element.parentElement.parentElement.style.borderTop = "1px solid black";
  };

  async componentDidMount() {
    switch (this.props.location.pathname) {
      case "/profile/":
        this.handleNavStylingLoad(document.getElementById("posts-svg"));
        break;
      case "/profile/channel/":
        this.handleNavStylingLoad(document.getElementById("channel-svg"));
        break;
      case "/profile/tagged/":
        this.handleNavStylingLoad(document.getElementById("tagged-svg"));
        break;
      case "/profile/saved/":
        this.handleNavStylingLoad(document.getElementById("saved-svg"));
    }

    const file = await fetch("/data/profile.json");
    const json = await file.json();

    this.setState({ profile: json });
    document.title = `${this.state.profile.name} (@${this.state.profile.username}) • Instagram`;
  }

  handleNavStyling = (e: any) => {
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

    if (e.target.tagName.toLowerCase() === "svg") {
      e.target.setAttribute("fill", "#262626");
      e.target.parentElement.querySelector("span").classList.add("link");
      e.target.parentElement.parentElement.style.borderTop = "1px solid black";
    } else if (e.target.tagName.toLowerCase() === "a") {
      e.target.querySelector("svg").setAttribute("fill", "#262626");
      e.target.querySelector("span").classList.add("link");
      e.target.parentElement.style.borderTop = "1px solid black";
    } else if (e.target.tagName.toLowerCase() === "span") {
      e.target.classList.add("link");
      e.target.parentElement
        .querySelector("svg")
        .setAttribute("fill", "#262626");
      e.target.parentElement.parentElement.style.borderTop = "1px solid black";
    }
  };

  render() {
    return (
      <Router>
        <div className="InstagramProfile">
          <div className="cont">
            <div className="left">
              <img src={this.state.profile.pfpUrl} draggable="false" alt="" />
            </div>
            <div className="right">
              <div className="right-header">
                <h1>{this.state.profile.username}</h1>
                <button>Edit Profile</button>
                <svg
                  aria-label="Options"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clipRule="evenodd"
                    d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="followers-bar">
                <p>
                  <strong>{this.state.profile.posts}</strong> posts
                </p>
                <p>
                  <strong>{this.state.profile.followers}</strong> followers
                </p>
                <p>
                  <strong>{this.state.profile.following}</strong> following
                </p>
              </div>
              <div className="bio">
                <h1>{this.state.profile.name}</h1>
                <p>{this.state.profile.bio}</p>
              </div>
            </div>
          </div>
          <div className="nav" id="nav">
            <div className="nav-cont">
              <ul>
                <li className="link" id="posts" onClick={this.handleNavStyling}>
                  <Link to="/profile/">
                    <svg
                      className="nav-icon"
                      aria-label="Posts"
                      fill="#262626"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                      id="posts-svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span>POSTS</span>
                  </Link>
                </li>
                <li
                  className="link"
                  id="channel"
                  onClick={this.handleNavStyling}
                >
                  <Link to="/profile/channel/">
                    <svg
                      className="nav-icon"
                      aria-label="Posts"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                      id="channel-svg"
                    >
                      <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
                    </svg>
                    <span>IGTV</span>
                  </Link>
                </li>
                <li className="link" id="saved" onClick={this.handleNavStyling}>
                  <Link to="/profile/saved/">
                    <svg
                      className="nav-icon"
                      aria-label="Saved"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                      id="saved-svg"
                    >
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                    <span>SAVED</span>
                  </Link>
                </li>
                <li
                  className="link"
                  id="tagged"
                  onClick={this.handleNavStyling}
                >
                  <Link to="/profile/tagged/">
                    <svg
                      className="nav-icon"
                      aria-label="Tagged"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                      id="tagged-svg"
                    >
                      <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
                    </svg>
                    <span>TAGGED</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/profile/" component={Posts} />
              <Route exact path="/profile/channel/" component={Channel} />
              <Route exact path="/profile/saved/" component={Saved} />
              <Route exact path="/profile/tagged/" component={Tagged} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withRouter(InstagramProfile);
