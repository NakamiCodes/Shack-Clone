import { connect } from "react-redux";
import { ADD_TOTAL, REMOVE_TOTAL } from "../store/action-types";

const mapDispatchToProps = (dispatch) => {
  return {
    addTotal: () => dispatch({ type: ADD_TOTAL }),
    removeTotal: () => dispatch({ type: REMOVE_TOTAL }),
  };
};

const MenuButton = (props) => {
  const handleItemClick = () => {
    props.setTotal(props.props.Price + props.total);
    props.setChosenItems({ ...props.chosenItems });
  };
  return (
    <div
      className="MenuButton"
      style={{ backgroundColor: props.props.Color }}
      onClick={() => handleItemClick()}
    >
      <p>{props.props.Name}</p>
    </div>
  );
};

export default connect(mapDispatchToProps)(MenuButton);
