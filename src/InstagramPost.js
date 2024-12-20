// Task 3: Import the necessary component modules and/or libraries using the variables referenced below.
import React, { Component} from 'react';
import PostActions from './PostActions.js';
import CommentSection from './CommentSection.js';

class InstagramPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // Task 4: Declare local state keys and assign them the value correlating to the props parameter of the constructor. For example, potato: props.potato
           liked: props.liked,
           saved: props.saved,
           totalLikes: props.totalLikes,
           caption: props.caption,
           userName: props.userName,
           postImgURL: props.postImgURL,
           userImgURL: props.userImgURL,
           comments: props.comments,
           newComment: ''
        };
    }

    toggleLike = () => {
        this.setState(
            (prevState) => ({ liked: !prevState.liked }),
            this.adjustLikes
        );
    };    

    adjustLikes = () => {
        this.setState((prevState) => ({
            totalLikes: this.state.liked ? prevState.totalLikes + 1 : prevState.totalLikes - 1
        }));
    };
    

    toggleSave = () => {
        this.setState((prevState) => ({ saved: !prevState.saved }));
    };

    handleCommentChange = (event) => {
        this.setState({ newComment: event.target.value });
    };

    handleAddComment = () => {
        this.setState((prevState) => ({
            comments: [...prevState.comments, prevState.newComment],
            newComment: ''
        }));
    };

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <img src={`./images/user/${this.state.userImgURL}`} alt="User Profile" className="profile-pic" />
                    {/* Task 5: Make the <h2> below dynamically reference the dummy user name. */}
                    <h2>{this.state.userName}</h2>
                </div>
                {/* Task 6: For the element below, pattern match the src value referencing the user profile image src above. Refer to the insta.css file and also add the appropriate class name */}
                <img className="post-image" src={`./images/post/${this.state.postImgURL}`} alt="Post Image" />
                <div className="post-actions">
                    <PostActions 
                        totalLikes={this.state.totalLikes} 
                        liked={this.state.liked}
                        saved={this.state.saved}
                        // Task 7: Pass down the appropriate handler callback functions the child component will need to invoke when/if things are clicked.
                        onLike={this.toggleLike}
                        toggleSave={this.toggleSave}
                    /> 
                </div>
                <div className="post-caption">
                    {/* Task 8: Make the <p> element below dynamically reference the post information. */}
                    <p><strong>{this.state.userName}</strong> {this.state.caption}</p>
                </div>
                <div className="comments-section">
                    <CommentSection
                        // Task 9: Pass down the necessary data and handlers used by the CommentSection component
                        comments={this.state.comments}
                        handleAddComment={this.handleAddComment}
                        handleCommentChange={this.handleCommentChange}
                        newComment = {this.state.newComment}
                    />
                </div>
            </div>
        );
    }
}


export default InstagramPost;
