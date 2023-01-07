import { connect, MapDispatchToProps } from "react-redux";
import * as types from "../store/action-types";
import * as actions from "../store/actions";
import menuItems from "../resources/Variables.dev";
import SelectedItem from "./SelectedItem";
const mapStateToProps = (state) => {
  return {
    total: state.total,
    chosenItems: state.chosenItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   remove: (price, item) => dispatch(actions.removeTotal(price, item)),
  // };
};

const TotalCalcSection = (props) => {
  const handleItemClick = (e) => {
    props.remove(menuItems.food["Price"]);
  };
  console.log("Total Calc Props", props.total.chosenItems);
  const listOfItems = props.total.chosenItems.map((item, index) => {
    return <SelectedItem key={index} props={item}></SelectedItem>;
  });
  return (
    <div>
      {listOfItems}
      <div>Total: {props.total.total}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalCalcSection);
