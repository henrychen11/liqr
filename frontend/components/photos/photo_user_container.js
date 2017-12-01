import React from 'react';
import { selectAllPhotos } from  '../../reducers/selectors';
import { requestUserPhotos } from '../../actions/photo_actions';
import { connect } from 'react-redux';
import PhotoUserIndex from './photo_user_index';

const mapStateToProps = (state) => {
  return {
    photos: selectAllPhotos(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserPhotos: (userId) => dispatch(requestUserPhotos(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUserIndex);
