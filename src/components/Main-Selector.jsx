import MenuButton from "./MenuButton";

const MainSelector = (props) => {
  const mainMenuItems = props.items.food.map((item, index) => {
    return (
      <MenuButton
        key={index}
        props={item}
        setChosenItems={props.setChosenItems}
        chosenItems={props.chosenItems}
      ></MenuButton>
    );
  });
  const custard = props.items.custard.map((item, index) => {
    return <MenuButton key={index} props={item}></MenuButton>;
  });
  return (
    <div className="pos-menu">
      {mainMenuItems}
      {custard}
    </div>
  );
};

export default MainSelector;
