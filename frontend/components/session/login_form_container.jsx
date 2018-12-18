import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login, deleteErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  processForm: user => dispatch(login(user)),
  deleteErrors: () => dispatch(deleteErrors())
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
