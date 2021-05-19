import React from "react";

interface SuggestionProps {
    username: string;
    pfpUrl: string;
}

class Suggestion extends React.Component<SuggestionProps> {
    render() {
        return (
            <div className="suggestion">
                <div className="pfp">
                    <img src={this.props.pfpUrl} alt="" draggable="false" />
                </div>
                <div className="username">
                    <h2>{this.props.username}</h2>
                    <p>Instagram recommended</p>
                </div>
                <div className="follow">
                    <a href="#">Follow</a>
                </div>
            </div>
        )
    }
}

export default Suggestion;