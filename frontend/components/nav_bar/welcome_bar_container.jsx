import React from 'react';
import {connect} from 'react-redux';
import welcomeBar from './welcome_bar';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

export default connect(mapStateToProps)(welcomeBar);
