import { replacement } from "../resources/Variables.dev";
import MenuButton from "./MenuButton";

const MainSelector = () => {
  const mainMenuItems = replacement.food.map((item) => {
    return <MenuButton props={item}></MenuButton>;
  });
  return <div className="PageWrapper">{mainMenuItems}</div>;
};

export default MainSelector;
