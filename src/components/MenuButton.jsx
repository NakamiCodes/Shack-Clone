const MenuButton = (info) => {
  console.log(info);
  const handleClick = (e, info) => {
    info.props.Function();
  };
  return (
    <div
      className="MenuButton"
      style={{ backgroundColor: info.props.Color }}
      onClick={(e) => handleClick(e, info)}
    >
      <p>{info.props.Name}</p>
    </div>
  );
};

export default MenuButton;
