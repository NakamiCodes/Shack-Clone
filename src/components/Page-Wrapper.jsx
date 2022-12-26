import MainSelector from "./Main-Selector";
import SelectionSection from "./Selection-Section";
import TotalCalcSection from "./Total-Calc-Section";
import { menuItems } from "../resources/Variables.dev";
import "../css/PageWrapper.css";
import { useState } from "react";

const PageWrapper = () => {
  let [total, setTotal] = useState(0);
  let [chosenItems, setChosenItems] = useState({});
  console.log("Page Wrapper Total", total);
  console.log("Page Wrapper Chosen Items", chosenItems);
  return (
    <div className="PageWrapper">
      <MainSelector
        items={menuItems}
        setTotal={setTotal}
        total={total}
        chosenItems={chosenItems}
        setChosenItems={setChosenItems}
      ></MainSelector>
      <SelectionSection></SelectionSection>
      <TotalCalcSection
        total={total}
        setTotal={setTotal}
        chosenItems={chosenItems}
        setChosenItems={setChosenItems}
      ></TotalCalcSection>
    </div>
  );
};

export default PageWrapper;
