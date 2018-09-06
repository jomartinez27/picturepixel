import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup, deleteErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  deleteErrors: () => dispatch(deleteErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
