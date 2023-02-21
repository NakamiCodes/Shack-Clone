import MainSelector from "./Main-Selector";
import SelectionSection from "./Selection-Section";
import TotalCalcSection from "./Total-Calc-Section";
import { menuItems } from "../resources/Variables.dev";
import "../css/PageWrapper.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const PageWrapper = (props) => {
  //console.log("Page Wrapper Props", props);
  return (
    <body>
      <div className="pos-container">
        <MainSelector items={menuItems}></MainSelector>
        <SelectionSection></SelectionSection>
        <TotalCalcSection
          total={props.state.total}
          chosenItems={props.state.chosenItems}
        ></TotalCalcSection>
      </div>
    </body>
  );
};

export default connect(mapStateToProps, null)(PageWrapper);
