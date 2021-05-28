import React from "react";
import Suggestion from "./suggestion";

interface SideNavState {
    suggestions: {
        username: string,
        pfpUrl: string
    }[],
    profile: {
        username: string,
        name: string,
        pfpUrl: string
    }
}

class SideNav extends React.Component<{}, SideNavState> {
    state = {
        suggestions: [
            {
                username: "",
                pfpUrl: ""
            }
        ],
        profile: {
            username: "",
            name: "",
            pfpUrl: ""
        }
    }

    async componentDidMount() {
        const file = await fetch('/data/suggestions.json');
        const suggestions = await file.json();

        const file2 = await fetch('/data/profile.json');
        const profile = await file2.json();

        this.setState({ suggestions , profile });
    }

    render() {
        return (
            <div className="side-nav">
                    <div className="profile">
                        <div className="profile-picture">
                            <img src={this.state.profile.pfpUrl} alt="" draggable="false" />
                        </div>
                        <div className="username">
                            <h2>{this.state.profile.username}</h2>
                            <p>{this.state.profile.name}</p>
                        </div>
                        <div className="switch">
                            <a href="#">Switch</a>
                        </div>
                    </div>
                    <div className="suggestions">
                        <div className="sug-header">
                            <div className="left">
                                <h2>Suggestions For You</h2>
                            </div>
                            <div className="right">
                                <a href="#">See All</a> 
                            </div>
                        </div>
                        <div className="sug-body">
                           {
                               this.state.suggestions.map(suggestion => {
                                   return (
                                        <Suggestion 
                                            username={suggestion.username}
                                            pfpUrl={suggestion.pfpUrl}
                                        />
                                   )
                               })
                           }
                        </div>
                    </div>
                    <div className="footer">
                        <p id="top">About • Help • Press • API • Jobs • Privacy Terms • Locations • Top Accounts • Hashtags • Language</p>
                        <p>© 2021 INSTAGRAM FROM <a href="https://github.com/uwuxia">UWUXIA</a></p>
                    </div>
            </div>
        )
    }
}

export default SideNav;