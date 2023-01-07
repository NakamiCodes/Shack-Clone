import { connect, useDispatch } from "react-redux";
import { ADD_TOTAL, REMOVE_TOTAL } from "../store/action-types";
import * as actions from "../store/actions";

import * as types from "../store/action-types";

const mapDispatchToProps = (dispatch) => {
  return {
    add: (price, item) => dispatch(actions.addTotal(price, item)),
    remove: (price, item) => dispatch(actions.removeTotal(price, item)),
  };
};

const MenuButton = (item) => {
  // console.log("Menu Button props", item);
  const handleItemClick = () => {
    item.add(item.props);
  };
  return (
    <div
      className="MenuButton"
      style={{ backgroundColor: item.props.Color }}
      onClick={() => handleItemClick()}
    >
      <p>{item.props.Name}</p>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(MenuButton);
