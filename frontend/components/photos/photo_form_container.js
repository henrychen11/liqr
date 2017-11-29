import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, ownProps) => {
  let photo = { title: '', description: '', img_url: ''};
    return { photo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    requestPhoto: (photoId) => dispatch(requestPhoto(photoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
