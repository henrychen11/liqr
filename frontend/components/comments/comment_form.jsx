import React from 'react';
import Modal from 'react-modal';
import CommentItem from './comment_item';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      body: "",
      editComment: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(comment) {
    this.setState({modalIsOpen: true, body: comment.body});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount(){
    this.props.requestPhotoComments(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.comment){
      this.setState({comment: newProps.comment, body: newProps.comment.body});
    }
  }

  handleUpdate(event){
    event.preventDefault();
    this.props.editComment(this.state.body);
    this.setState({body: ""});
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
    const { comments, currentUser, errors } = this.props;
    return (
      <div className="comment-container">
        {
          (!comments) ? <div></div> :
          comments.map( (comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              editComment={this.props.editComment}
              deleteComment={this.props.deleteComment}
              errors={errors}
              clearErrors={this.props.clearErrors}
               />
          ))
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
