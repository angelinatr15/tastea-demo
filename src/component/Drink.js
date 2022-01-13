function Drink(props) {
  return (
    <div>
      {props.description + " "}
      {props.cost}
      <div>{props.addOns}</div>
      <br></br>
    </div>
  );
}

export default Drink;

/*
  props:  {
    description: ''
  }
*/
