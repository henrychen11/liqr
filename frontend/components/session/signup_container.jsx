import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import signUp from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(signUp);
