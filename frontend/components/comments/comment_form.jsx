import React from 'react';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.requestPhotoComments(this.props.photo.id);
    // console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.setState({comment: newProps.comment});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createComment(this.state.comment, this.props.photo.id);
  }

  update(field){
    return (event) => this.setState({
      comment: Object.assign({}, this.state.comment, { [field]: event.target.value })
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
                <button onClick={() => this.props.deleteComment(comment.id)}>
                  <i  className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              }
          </div>
          <div className="comment-author">Posted By: {comment.author_username}</div>

          </div>
        )
      }
      <form>
        <textarea className="photo-comment-new"
          onChange={this.update('body')}

          placeholder="Enter Comment" />
        <button onClick={this.handleSubmit} className="modal-button">Add Comment</button>
      </form>

      </div>
    );
  }
}

export default CommentForm;
