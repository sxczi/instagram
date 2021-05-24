import React from "react";

import Profile from "../activityProfile";

class InstagramActivity extends React.Component {
    render() {
        return (
            <div className="InstagramActivity">
                <div className="activity">
                    <div className="activity-head">
                        <h1>This Week</h1>
                    </div>
                    <div className="activity-body">
                        <Profile 
                            date="1d"
                            username="null"
                            pfpUrl="https://images.unsplash.com/photo-1621840090029-08b00c831808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        />
                        <Profile 
                            date="2w"
                            username="carl"
                            pfpUrl="https://images.unsplash.com/photo-1621840090029-08b00c831808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default InstagramActivity;