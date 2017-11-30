import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    }
};

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      body: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(comment) {
    this.setState({modalIsOpen: true, body: comment.body});
    console.log(this.state.comment);
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

  update2(field){
    return (event) => this.setState({
      comment: event.target.value
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
                <div>
                  <i onClick={() => this.openModal(comment)} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  <i onClick={() => this.props.deleteComment(comment.id)} className="fa fa-trash-o" aria-hidden="true"></i>
                </div>
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

      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Edit Comment Modal"
        >
          <form className="modal-form" onSubmit={this.handleUpdate}>
            <label className="modal-label">Comment:</label>
              <input
                className="modal-input"
                placeholder="Edit"
                type="text"
                onChange={this.update('body')}
                value={this.state.comment} />
            <div className="modal-button-container">
              <input
                className="modal-button"

                type="submit"
                value="Save" />
              <button className="modal-button" onClick={this.closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>

      </div>
    );
  }
}

export default CommentForm;
