import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  let photo = { title: '', description: '', img_url: ''};
  let formType = 'new';

  if (ownProps.location.pathname.includes('edit')) {
    photo = Object.assign({}, photo, state.entities.photos[ownProps.match.params.photoId]);
    formType = 'edit';
  }

    return { photo, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = createPhoto;
  if (ownProps.location.pathname.includes('edit')){
    action = editPhoto;
  };
}
