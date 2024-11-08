import React, {Component} from 'react' 

// Refer to the module pattern we reviewed several times in class today and debug the error of this component.

class PostActions extends Component {
    
    render() {
        return (
        <>
            <button onClick={this.props.onLike} className="like-button">
                <i className={this.props.liked ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <p>{this.props.totalLikes}</p>
            <button className="comment-button">
                <i className="far fa-comment"></i>
            </button>
            <button onClick={this.props.toggleSave} className="save-button">
                <i className={this.props.saved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
        </>   
        );
    }
}


