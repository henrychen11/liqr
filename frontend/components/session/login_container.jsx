import React from 'react';
import { connect } from 'react-redux';


import logIn from './login';
import { login } from '../../actions/session';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDispatchToProps)(logIn);
