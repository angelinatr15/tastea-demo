function Food(props) {
  return (
    <div>
      {props.name + " "}
      {props.cost + " "}
      <br></br>
      {props.spicy}
    </div>
  );
}
export default Food;
