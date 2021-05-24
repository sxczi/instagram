import React from "react";

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
                    <h1>{this.props.username}</h1> <p>started following you.</p> <span>{this.props.date}</span>
                </div>
                <div className="follow">
                    <button>Follow</button>
                </div>
            </div>
        )
    }
}

export default Profile;