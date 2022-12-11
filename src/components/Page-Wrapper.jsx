import MainSelector from "./Main-Selector";
import SelectionSection from "./Selection-Section";
import TotalCalcSection from "./Total-Calc-Section";
import "../css/PageWrapper.css";
import { useState } from "react";

const PageWrapper = () => {
  const [total, setTotoal] = useState("0");
  const [subTotal, setSubTotal] = useState("0");
  const totalCalc = {
    total: total,
    subTotal: subTotal,
  };
  console.log(totalCalc);
  return (
    <div className="PageWrapper">
      <MainSelector></MainSelector>
      <SelectionSection></SelectionSection>
      <TotalCalcSection props={totalCalc}></TotalCalcSection>
    </div>
  );
};

export default PageWrapper;
