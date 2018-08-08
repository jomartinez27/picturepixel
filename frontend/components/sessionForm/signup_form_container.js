import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
