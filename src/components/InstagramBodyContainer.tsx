import React from "react";

import Post from "./post"

class InstagramBodyContainer extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="posts-stories">
                    <div className="stories">
                        <div className="container">
                            <div className="story new-story">
                                <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" />
                                <p>allah</p>
                            </div>
                            <div className="story ">
                                <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" />
                                <p>allah</p>
                            </div>
                            <div className="story new-story">
                                <img src="https://pbs.twimg.com/profile_images/1366502091448078336/WCnp0au4_400x400.jpg" alt="" />
                                <p>bruh</p>
                            </div>
                        </div>
                    </div>
                    <div className="posts">
                        <Post 
                            username="lara" 
                            location="Iraq" 
                            postImageUrl="https://pbs.twimg.com/profile_images/1366502091448078336/WCnp0au4_400x400.jpg" 
                            pfpUrl="https://pbs.twimg.com/profile_images/1366502091448078336/WCnp0au4_400x400.jpg"
                            description="lmao"
                            comments={[{
                                username: "dogeduaa",
                                text: "sex"
                            },
                            {
                                username: "cheems",
                                text: "uwu"
                            }
                            ]}
                            likes="1"
                        />
                    </div>
                </div>
                <div className="side-nav">
                    <div className="profile">
                        <div className="profile-picture">
                            <img src="https://pbs.twimg.com/profile_images/1366502091448078336/WCnp0au4_400x400.jpg" draggable="false" />
                        </div>
                        <div className="username">
                            <h2>aaaaaa</h2>
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
                            <div className="suggestion">
                                <div className="pfp">
                                    <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" draggable="false" />
                                </div>
                                <div className="username">
                                    <h2>allah_irl</h2>
                                    <p>Instagram recommended</p>
                                </div>
                                <div className="follow">
                                    <a href="#">Follow</a>
                                </div>
                            </div>
                            <div className="suggestion">
                                <div className="pfp">
                                    <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" draggable="false" />
                                </div>
                                <div className="username">
                                    <h2>allah_irl</h2>
                                    <p>Instagram recommended</p>
                                </div>
                                <div className="follow">
                                    <a href="#">Follow</a>
                                </div>
                            </div>
                            <div className="suggestion">
                                <div className="pfp">
                                    <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" draggable="false" />
                                </div>
                                <div className="username">
                                    <h2>allah_irl</h2>
                                    <p>Instagram recommended</p>
                                </div>
                                <div className="follow">
                                    <a href="#">Follow</a>
                                </div>
                            </div>
                            <div className="suggestion">
                                <div className="pfp">
                                    <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" draggable="false" />
                                </div>
                                <div className="username">
                                    <h2>allah_irl</h2>
                                    <p>Instagram recommended</p>
                                </div>
                                <div className="follow">
                                    <a href="#">Follow</a>
                                </div>
                            </div>
                            <div className="suggestion">
                                <div className="pfp">
                                    <img src="https://i.redd.it/kg5onmo1nib21.jpg" alt="" draggable="false" />
                                </div>
                                <div className="username">
                                    <h2>allah_irl</h2>
                                    <p>Instagram recommended</p>
                                </div>
                                <div className="follow">
                                    <a href="#">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <p id="top">About - Help - Press - API - Jobs - Privacy Terms - Locations - Top Accounts - Hashtags - Language</p>
                        <p>© 2021 INSTAGRAM FROM <a href="https://github.com/dogeduaa">DOGEDUAA</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstagramBodyContainer;