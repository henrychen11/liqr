import React from 'react';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestPhotoComments(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({comment: newProps.comment});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createComment( this.state, this.props.photo.id);
    this.setState({body: ""});
  }

  update(field){
    return (event) => this.setState({
      body: event.target.value
    });
  }

  render(){
    const { comments, currentUser } = this.props;
    return (
      <div className="comment-container">
      {
        (!comments) ? <div></div> :
          comments.map( (comment) =>
          <div key={comment.id} className="comment-item-box">
            <div className="comment-text">{comment.body}
              { (comment.author_id !== currentUser.id) ? <div></div> :

                  <i onClick={() => this.props.deleteComment(comment.id)} className="fa fa-trash-o" aria-hidden="true"></i>

              }
          </div>
          <div className="comment-author">Posted By: {comment.author_username}</div>
          </div>
        )
      }
      <form>
        <textarea className="photo-comment-new"
          onChange={this.update('body')}
          value={this.state.body}
          placeholder="Enter Comment" />
        <button onClick={this.handleSubmit} className="modal-button">Add Comment</button>
      </form>

      </div>
    );
  }
}

export default CommentForm;
