import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserNav from './user_nav';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
})

export default withRouter(connect(mapStateToProps)(UserNav));
