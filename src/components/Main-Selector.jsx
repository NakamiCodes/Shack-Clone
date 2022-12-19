import { menuItems } from "../resources/Variables.dev";
import MenuButton from "./MenuButton";

const MainSelector = () => {
  const mainMenuItems = menuItems.food.map((item) => {
    return <MenuButton props={item}></MenuButton>;
  });
  const custard = menuItems.custard.map((item) => {
    return <MenuButton props={item}></MenuButton>;
  });
  return (
    <div className="PageWrapper">
      {mainMenuItems}
      {custard}
    </div>
  );
};

export default MainSelector;
