import React from "react";

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
                <p>{this.props.username}</p>
            </div>
        )
    }
}

export default Story;