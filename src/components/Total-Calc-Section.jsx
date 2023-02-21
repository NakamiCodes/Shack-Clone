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
  //console.log("Total Calc Props", props.total.chosenItems);
  const listOfItems = props.total.chosenItems.map((item, index) => {
    return (
      <SelectedItem
        className="order-items"
        key={index}
        props={item}
      ></SelectedItem>
    );
  });
  console.log("Current props total", props.total.Total);
  //let tax = props.total.Total * 0.18;
  console.log("Calculated Tax", props.total.Total * 0.18);
  //let taxedTotal = tax + props.total.Total;
  return (
    <div className="pos-order">
      {listOfItems}
      {/* <div>Tax: {tax}</div>
      <div>Total: {taxedTotal}</div> */}
      <div>Total: {props.total.Total}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalCalcSection);
