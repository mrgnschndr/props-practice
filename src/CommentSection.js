import React, {Component} from 'react'

class CommentSection extends Component {

    render() {
        return (
            <>
            <div className="comments-section">
                {this.props.comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
            <div className="add-comment">
            <input
                type="text"
                placeholder="Add a comment..."
                value={this.props.newComment}
                onChange={this.props.handleCommentChange}
            />
            <button onClick={this.props.handleAddComment}>Post</button>
        </div>
        </>
        );
    }
}

export default CommentSection;
