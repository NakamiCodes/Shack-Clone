import MainSelector from "./Main-Selector";
import SelectionSection from "./Selection-Section";
import TotalCalcSection from "./Total-Calc-Section";
import { menuItems } from "../resources/Variables.dev";
import "../css/PageWrapper.css";
import { addTotal, removeTotal, signIn, signOut } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTotal: dispatch(addTotal()),
    removeTotal: dispatch(removeTotal()),
    signIn: dispatch(signIn()),
    signOut: dispatch(signOut()),
  };
};

const PageWrapper = (props) => {
  console.log("Page Wrapper Props", props);
  return (
    <div className="PageWrapper">
      <MainSelector
        items={menuItems}
        // setTotal={setTotal}
        // total={total}
        // chosenItems={chosenItems}
        // setChosenItems={setChosenItems}
      ></MainSelector>
      <SelectionSection></SelectionSection>
      <TotalCalcSection
        total={props.state.total}
        chosenItems={props.state.chosenItems}
      ></TotalCalcSection>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
