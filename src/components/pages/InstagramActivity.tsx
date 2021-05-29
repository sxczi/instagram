import React from "react";

import Profile from "../activityProfile";
import Footer from "../footer";

interface ActivityState {
    activity: {
        date: string;
        username: string;
        pfpUrl: string;
    }[];
}

class InstagramActivity extends React.Component<{}, ActivityState> {
    state = {
        activity: [
            {
                date: "",
                username: "",
                pfpUrl: "/pfp.jpg"
            }
        ]
    }

    async componentDidMount() {
        const file = await fetch('/data/activity.json');
        const activity = await file.json();

        this.setState({ activity })
    }

    render() {
        return (
            <div className="InstagramActivity">
                <div className="activity">
                    <div className="activity-head">
                        <h1>This Week</h1>
                    </div>
                    <div className="activity-body">
                       {
                           this.state.activity.map(profile => {
                               return (
                                    <Profile 
                                        date={profile.date}
                                        username={profile.username}
                                        pfpUrl={profile.pfpUrl}
                                    />
                               )
                           })
                       }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default InstagramActivity;