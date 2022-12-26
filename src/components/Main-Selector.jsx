import MenuButton from "./MenuButton";

const MainSelector = (props) => {
  const mainMenuItems = props.items.food.map((item, index) => {
    return (
      <MenuButton
        key={index}
        props={item}
        setTotal={props.setTotal}
        total={props.total}
        setChosenItems={props.setChosenItems}
        chosenItems={props.chosenItems}
      ></MenuButton>
    );
  });
  const custard = props.items.custard.map((item, index) => {
    return (
      <MenuButton
        key={index}
        props={item}
        setTotal={props.setTotal}
        total={props.total}
      ></MenuButton>
    );
  });
  return (
    <div className="PageWrapper">
      {mainMenuItems}
      {custard}
    </div>
  );
};

export default MainSelector;
