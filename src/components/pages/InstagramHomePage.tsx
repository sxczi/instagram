import React from "react";

import Post from "../post"
import Story from "../story";
import Suggestion from "../suggestion";

const dummypic = "pfp.jpg"

class InstagramHomePage extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="posts-stories">
                    <div className="stories">
                        <div className="container">
                            <Story 
                                username="user"
                                pfpUrl={dummypic}
                                storyNew={true}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={false}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={true}
                            />
                        </div>
                    </div>
                    <div className="posts">
                        <Post 
                            username="user" 
                            location="Iraq" 
                            postImageUrl="https://images.unsplash.com/photo-1621343722485-aa2a26d31543?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            pfpUrl={dummypic}
                            description="idk"
                            comments={[{
                                username: "dogeduaa",
                                text: "awesome!"
                            },
                            {
                                username: "cheems",
                                text: "that's really great"
                            }
                            ]}
                            likes="56"
                            postDate="3 days ago"
                        />
                    </div>
                </div>
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
                        <p id="top">About - Help - Press - API - Jobs - Privacy Terms - Locations - Top Accounts - Hashtags - Language</p>
                        <p>© 2021 INSTAGRAM FROM <a href="https://github.com/dogeduaa">DOGEDUAA</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstagramHomePage;