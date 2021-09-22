import React from "react";

import { Link } from "react-router-dom";

interface StoryProps {
  pfpUrl: string;
  username: string;
  storyNew: boolean;
}

class Story extends React.Component<StoryProps> {
  render() {
    return (
      <div className={this.props.storyNew ? "story new-story" : "story"}>
        <img src={this.props.pfpUrl} alt="" />
        <p>
          <Link to={this.props.username + "/"}>
            {this.props.username.length >= 10
              ? this.props.username.substring(0, 7) + "..."
              : this.props.username}
          </Link>
        </p>
      </div>
    );
  }
}

export default Story;
