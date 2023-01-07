const SelectedItem = (props) => {
  console.log("Selected Item Props", props.props);
  return (
    <div>
      <div>{props.props.Name}</div>
      <div>{props.props.Price}</div>
    </div>
  );
};

export default SelectedItem;
