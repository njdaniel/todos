import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});


// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: () => {
//         dispatch(setVisibilityFilter(ownProps.filter));
//     },
// });
// When only a function is being returned in a function that is a function you can condense to below
// Fat arrow to concise when a function is inside an object

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
