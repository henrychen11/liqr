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

  handleSubmit(event){
    event.preventDefault();
    this.props.createComment(this.state.comment);
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
          <div key={comment.id}>
            <div>{comment.body}
              { (comment.author_id !== currentUser.id) ? <div></div> :
                <span>
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
              }
          </div>

          </div>
        )
      }

      </div>
    );
  }
}

export default CommentForm;


// <form onSubmit={this.handleSubmit}>
//   <textarea className="photo-comment-new"
//     onChange={this.update('body')}
//     placeholder="Enter Comment" />
//   <input className="modal-button" type="submit">Add Comment</input>
// </form>
