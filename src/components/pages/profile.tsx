import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Instagram404 from "./Instagram404";
import Post from "../explorePost";

const Profile = () => {
  const handleNavStyling = (e: any) => {
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

  const handleNavStylingLoad = (element: any) => {
    if (!element) return;

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

  const [posts, setPosts] = useState([
    {
      imgUrl: "",
      likes: 0,
      comments: 0,
      postId: "",
    },
  ]);

  const channelPosts = [
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    },
    {
      imgUrl: 'https://cdn.britannica.com/59/196359-050-2CDDC13A/forces-Iraqi-rocket-launchers-outskirts-Khorramshahr-Iran-October-1980.jpg',
      postId: 'mdfs3s',
      videoLength: '3:45',
      videoTitle: 'Iraq-Iran war',
      likes: 500,
      comments: 20
    }
  ];

  const { username } = useParams<{ username: string }>();
  const location = useLocation();

  const [profile, setProfile] = useState({
    username,
    pfpUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Qasem_Soleiman_in_NAC_conference.jpg/220px-Qasem_Soleiman_in_NAC_conference.jpg",
    posts: "2",
    followers: "90",
    following: "45",
    name: "Ghassem Soleimani Kermani",
    bio: "",
  });

  useEffect(() => {
    document.title = `${profile.name} (@${username}) • Instagram`;

    (async () => {
      const data = await fetch("/data/explore.json");
      const response = await data.json();

      setPosts(response);
    })();

    switch (location.pathname) {
      case `/${username}/`:
        handleNavStylingLoad(document.getElementById("posts-svg"));
        break;
      case `/${username}/channel/`:
        handleNavStylingLoad(document.getElementById("channel-svg"));
        break;
      case `/${username}/tagged/`:
        handleNavStylingLoad(document.getElementById("tagged-svg"));
    }
  }, []);

  return (
    <Router>
      {username === "qassimsoleimani" ? (
        <div className="InstagramProfile">
          <div className="cont">
            <div className="left">
              <img src={profile.pfpUrl} draggable="false" alt="" />
            </div>
            <div className="right">
              <div className="right-header">
                <h1>{profile.username}</h1>
                <button className="follow">Follow</button>
                <svg
                  aria-label="More options"
                  fill="#262626"
                  height="16"
                  viewBox="0 0 48 48"
                  width="16"
                >
                  <circle
                    clip-rule="evenodd"
                    cx="8"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clip-rule="evenodd"
                    cx="24"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clip-rule="evenodd"
                    cx="40"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                </svg>
              </div>
              <div className="followers-bar">
                <p>
                  <strong>{profile.posts}</strong> posts
                </p>
                <p>
                  <strong>{profile.followers}</strong> followers
                </p>
                <p>
                  <strong>{profile.following}</strong> following
                </p>
              </div>
              <div className="bio">
                <h1>{profile.name}</h1>
                <p>{profile.bio}</p>
              </div>
            </div>
          </div>
          <div className="nav" id="nav">
            <div className="nav-cont">
              <ul>
                <li className="link" id="posts" onClick={handleNavStyling}>
                  <Link to={`/${username}/`}>
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
                <li className="link" id="channel" onClick={handleNavStyling}>
                  <Link to={`/${username}/channel/`}>
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
                <li className="link" id="tagged" onClick={handleNavStyling}>
                  <Link to={`/${username}/tagged/`}>
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
              <Route exact path={`/${username}`}>
                <Posts posts={posts} />
              </Route>
              <Route exact path={`/${username}/channel/`}> 
                <Channel posts={channelPosts} />
              </Route>
              <Route exact path={`/${username}/tagged/`}>
                <Tagged posts={posts} />
              </Route>
            </Switch>
          </div>
          <br />
          <br />
          <div className="footer-profile">
            <div className="cont">
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Help</li>
                <li>API</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Top Accounts</li>
                <li>Hashtags</li>
                <li>Locations</li>
              </ul>
              <p>© 2021 Instagram from uwuxia</p>
            </div>
          </div>
        </div>
      ) : (
        <Instagram404 />
      )}
    </Router>
  );
};

interface PropTypes {
  posts: { imgUrl: string; postId: string; likes: number; comments: number }[];
}

interface ChannelPropTypes {
  posts: {
    imgUrl: string;
    videoLength: string;
    videoTitle: string;
    postId: string;
    likes: number;
    comments: number;
  }[];
}

const Posts = (props: PropTypes) => {
  return (
    <div className="u-profile-posts">
      {props.posts.map((post) => (
        <Post
          imgUrl={post.imgUrl}
          postId={post.postId}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

const Channel = (props: ChannelPropTypes) => {
  return <div className="u-profile-channel">
    {props.posts.map((post) => (
      <div className="channel-post">
        <a href={`/tv/${post.postId}/`}>
          <img src={post.imgUrl} alt="" />
          <div className="text">
            <div className="top">
              <p>{post.videoLength}</p>
            </div>
            <div className="bottom">
              <h2>{post.videoTitle}</h2>
            </div>
          </div>
          <div className="img-overlay">
            <div className="center-text">
              <span>
                <svg
                  aria-label="Like"
                  color="#fff"
                  fill="#fff"
                  height="14"
                  role="img"
                  viewBox="0 0 48 48"
                  width="14"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>{" "}
                {post.likes}
              </span>
              <span>
                <svg
                  aria-label="Comment"
                  color="#fff"
                  fill="#fff"
                  height="14"
                  role="img"
                  viewBox="0 0 48 48"
                  width="14"
                >
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fill-rule="evenodd"
                  ></path>
                </svg>{" "}
                {post.comments}
              </span>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>;
};

const Tagged = (props: PropTypes) => {
  return (
    <div className="u-profile-tagged">
      {props.posts.map((post) => (
        <Post
          imgUrl={post.imgUrl}
          postId={post.postId}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Profile;
