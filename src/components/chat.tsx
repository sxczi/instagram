import React from "react";

interface ChatProps {
  pfpUrl: string;
  username: string;
  message: string;
  date: string;
}

class Chat extends React.Component<ChatProps> {
  render() {
    return (
      <div className="chat">
        <div className="left">
          <img
            src={this.props.pfpUrl ? this.props.pfpUrl : "/assets/pfp.jpg"}
            draggable="false"
            alt=""
          />
        </div>
        <div className="right">
          <h1>
            {this.props.username.length >= 17
              ? this.props.username.substring(0, 14) + "..."
              : this.props.username}
          </h1>
          <p>
            {this.props.message} <span className="dot">·</span>{" "}
            <span>{this.props.date}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Chat;
