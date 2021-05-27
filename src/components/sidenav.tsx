import React from "react";
import Suggestion from "./suggestion";

const dummypic = "pfp.jpg";

class SideNav extends React.Component {
    render() {
        return (
            <div className="side-nav">
                    <div className="profile">
                        <div className="profile-picture">
                            <img src={dummypic} alt="" draggable="false" />
                        </div>
                        <div className="username">
                            <h2>user</h2>
                            <p>User</p>
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
                           <Suggestion 
                                username="user"
                                pfpUrl={dummypic}
                           />
                           <Suggestion 
                                username="user"
                                pfpUrl={dummypic}
                           />
                           <Suggestion 
                                username="user"
                                pfpUrl={dummypic}
                           />
                           <Suggestion 
                                username="user"
                                pfpUrl={dummypic}
                           />
                           <Suggestion 
                                username="user"
                                pfpUrl={dummypic}
                           />
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