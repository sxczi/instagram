import React from 'react';

class Post extends React.Component<any> {
    render() {
        return (
            <div className="explore-post">
                <img src={this.props.imgUrl} alt="" />
            </div>
        )
    }
}

export default Post;