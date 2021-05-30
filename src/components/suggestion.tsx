import React from "react";

import { Link } from "react-router-dom";

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
                    <h2><Link to={"/" + this.props.username}>{this.props.username.length > 17 ? this.props.username.substring(0, 15) + ".." : this.props.username}</Link></h2>
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