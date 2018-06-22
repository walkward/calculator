import { connect } from 'react-redux';

import { input } from '../actions';
import Interface from '../components/Interface';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  handleInput: (value, inputType) => dispatch(input(value, inputType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Interface);
