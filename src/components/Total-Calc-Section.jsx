import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  total: state.total,
});

const mapDispatchToProps = (dispatch, ownProps) => {};

const TotalCalcSection = (props) => {
  console.log(props.total);
  return <div>Total: {props.total}</div>;
};

export default connect(mapStateToProps)(TotalCalcSection);
