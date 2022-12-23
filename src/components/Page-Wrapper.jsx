import MainSelector from "./Main-Selector";
import SelectionSection from "./Selection-Section";
import TotalCalcSection from "./Total-Calc-Section";
import "../css/PageWrapper.css";

const PageWrapper = () => {
  return (
    <div className="PageWrapper">
      <MainSelector></MainSelector>
      <SelectionSection></SelectionSection>
      <TotalCalcSection></TotalCalcSection>
    </div>
  );
};

export default PageWrapper;
