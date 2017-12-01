import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';
import { clearErrors } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  let photo = { title: '', description: '', img_url: ''};
    return {
      photo,
      errors: state.errors.photos
     };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
