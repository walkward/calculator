import { connect } from 'react-redux';

import Display from '../components/Display';

const mapStateToProps = state => ({
  display: state.display,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display);
