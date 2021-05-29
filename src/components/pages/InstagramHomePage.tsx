import React from "react";

import Post from "../post"
import Story from "../story";
import SideNav from "../sidenav";

interface HomePageState {
    posts: {
        username: string,
        location: string,
        postImageUrl: string,
        pfpUrl: string,
        description: string,
        comments: {
            username: string,
            text: string
        }[],
        likes: string,
        postDate: string
    }[],
    stories: {
        username: string,
        pfpUrl: string,
        storyNew: boolean
    }[]
}


class InstagramHomePage extends React.Component<{}, HomePageState> {
    state = {
        posts: [
            {
                username: "",
                location: "",
                postImageUrl: "",
                pfpUrl: "/assets/pfp.jpg",
                description: "",
                comments: [
                    {
                        username: "",
                        text: ""
                    }
                ],
                likes: "",
                postDate: ""
            }
        ],
        stories: [
            {
                username: "",
                pfpUrl: "/assets/pfp.jpg",
                storyNew: false
            }
        ]
    }

    async componentDidMount() {
        document.title = "Instagram";

        const file = await fetch('/data/posts.json');
        const posts = await file.json();

        const file2 = await fetch('/data/stories.json');
        const stories = await file2.json();

        this.setState({ posts, stories  });
        console.log(this.state)
    }

    render() {
        return (
            <div className="main-container">
                <div className="posts-stories">
                    <div className="stories">
                        <div className="container">
                            {
                                this.state.stories.map(story => {
                                    return (
                                        <Story 
                                            username={story.username}
                                            pfpUrl={story.pfpUrl}
                                            storyNew={story.storyNew}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="posts">
                        {
                            this.state.posts.map(post => {
                                return (
                                    <Post 
                                        username={post.username}
                                        location={post.location} 
                                        postImageUrl={post.postImageUrl} 
                                        pfpUrl={post.pfpUrl}
                                        description={post.description}
                                        comments={post.comments}
                                        likes={post.likes}
                                        postDate={post.postDate}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <SideNav />
            </div>
        )
    }
}

export default InstagramHomePage;