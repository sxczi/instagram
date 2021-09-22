import React from "react";
import Post from "../explorePost";

interface explorePost {
  imgUrl: string;
  likes: number;
  comments: number;
  postId: string;
}

interface stateTypes {
  posts: explorePost[];
}

class InstagramExplore extends React.Component<{}, stateTypes> {
  state = {
    posts: [
      {
        imgUrl: "",
        likes: 0,
        comments: 0,
        postId: "",
      },
    ],
  };

  async componentDidMount() {
    const data = await fetch("/data/explore.json");
    const response = await data.json();

    this.setState({
      posts: response,
    });
  }

  render() {
    return (
      <div className="InstagramExplore">
        <div className="explore-posts">
          {this.state.posts.map((post) => (
            <Post imgUrl={post.imgUrl} postId={post.postId} likes={post.likes} comments={post.comments} />
          ))}
        </div>
        <br />
        <div className="footer-explore">
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
    );
  }
}

export default InstagramExplore;
