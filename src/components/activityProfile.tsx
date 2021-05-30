import React from "react";

import { Link } from "react-router-dom";

interface ProfileProps {
    pfpUrl: string;
    username: string;
    date: string;
}

class Profile extends React.Component<ProfileProps> {
    render() {
        return (
            <div className="profile">
                <div className="img">
                    <img src={this.props.pfpUrl} draggable="false" alt="" />
                </div>
                <div className="username">
                    <h1><Link to={"/" + this.props.username}>{this.props.username.length >= 2 && window.innerWidth < 350 ? this.props.username.substring(0, 1) + ".." :this.props.username.length >= 4 && window.innerWidth < 400 ? this.props.username.substring(0, 2) + ".." :  this.props.username.length >= 7 && window.innerWidth < 600 ? this.props.username.substring(0, 5) + ".." : this.props.username}</Link></h1> <p>started following you.</p> <span>{this.props.date}</span>
                </div>
                <div className="follow">
                    <button>Follow</button>
                </div>
            </div>
        )
    }
}

export default Profile;