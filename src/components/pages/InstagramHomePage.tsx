import React from "react";

import Post from "../post"
import Story from "../story";
import Suggestion from "../suggestion";
import SideNav from "../sidenav";

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
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={true}
                            />
                            <Story
                                username="person"
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
                                storyNew={false}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={false}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={false}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={false}
                            />
                            <Story
                                username="person"
                                pfpUrl={dummypic}
                                storyNew={false}
                            /><Story
                            username="person"
                            pfpUrl={dummypic}
                            storyNew={false}
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
                <SideNav />
            </div>
        )
    }
}

export default InstagramHomePage;