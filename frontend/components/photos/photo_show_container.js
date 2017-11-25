import { connect } from 'react-redux';
import PhotoShow from './photo_show';

import { requestPhoto, editPhoto, destroyPhoto } from './actions/photo_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) =
