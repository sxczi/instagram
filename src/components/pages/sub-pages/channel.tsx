import React from "react";

class Channel extends React.Component {
    render() {
        return (
            <div className="channel">
                <h1>Upload a Video</h1>
                <p>Videos must be between 1 and 60 minutes long.</p>
                <button>Upload</button>
            </div>
        )
    }
}

export default Channel;