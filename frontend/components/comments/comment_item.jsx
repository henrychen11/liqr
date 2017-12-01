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


export default class CommentItem extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        modalIsOpen: false,
        comment: this.props.comment.body
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
    }

    openModal(comment) {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    update(field){
      return (event) => this.setState({
        comment: event.target.value
      });
    }

    handleUpdate(event){
      event.preventDefault();
      this.props.editComment({
        id: this.props.comment.id,
        body: this.state.comment
      }).then( () => this.closeModal(), () => this.setState({comment: this.props.comment.body}));
    }

    renderErrors() {
      return (
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li className="errors" key={idx}>{error}</li>
            )
          )}
        </ul>
      );
    }

    render(){
      const { comment, currentUser } = this.props;

      return (
        <div>
          {
            (!comment) ? <div></div> :
            <div key={comment.id} className="comment-item-box">
              <div className="comment-text">{comment.body}
                <div className="comment-icon-container">
                  <div className="comment-author">Posted By: {comment.author_username}</div>
                  { (comment.author_id !== currentUser.id) ? <div></div> :
                    <div>
                      <i onClick={() => this.openModal(comment.body)} className="comment-icon fa fa-pencil-square-o" aria-hidden="true"></i>
                      <i onClick={() => this.props.deleteComment(comment.id)} className="comment-icon fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                  }
                </div>
              </div>
            </div>
          }

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
                    onClick={this.props.clearErrors.bind(this)}
                    type="submit"
                    value="Save" />
                  <button className="modal-button" onClick={this.closeModal}>Cancel</button>
                </div>
                <div>{this.renderErrors()}</div>
              </form>
            </Modal>

        </div>
      );
    }
}
