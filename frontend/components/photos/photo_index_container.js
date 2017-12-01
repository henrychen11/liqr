import React from 'react';
import { selectAllPhotos } from  '../../reducers/selectors';
import { requestAllPhotos } from '../../actions/photo_actions';
import { connect } from 'react-redux';
import PhotoIndex from './photo_index';

const mapStateToProps = (state) => {
  return {
    photos: selectAllPhotos(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
