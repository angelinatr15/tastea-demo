import Drink from "../component/Drink";
import Food from "../component/Food";

function Menu() {
  return (
    <div>
      <p>
        <b>Reccomended</b>
      </p>

      <Drink
        description="Thai Tea"
        cost="$ 3.25"
        addOns="pudding, aloe vera, boba"
      />
      <Drink description="Milk Tea" cost="$ 3.00" addOns="kiwi, orange" />
      <Drink description="Green Tea" cost="$ 2.95" addOns="peach" />
      <Drink description="Oolong Tea" cost="$ 2.95" addOns="mango" />
      <Drink description="Black Tea" cost="$ 2.95" addOns="lemon" />

      <p>
        <b>Favorites</b>
      </p>

      <div>
        <Food
          name="Popcorn Chicken"
          cost="$ 4.50"
          spicy="mild, medium, spicy"
        />
        <Food name="Fried Tofu" /> cost="$ 5.75" spicy="mild, medium, spicy" />
        <Food name="Calamari" cost="$ 5.75" spicy="mild, medium, spicy" />
        <Food name="Fried Roe" cost="$ 5.75" spicy="mild, medium, spicy" />
        <Food name="Fried Rice" cost="$ 5.75" spicy="mild, medium, spicy" />
        <Food name="Fried Noodles" cost="$ 5.75" spicy="mild, medium, spicy" />
      </div>
    </div>
  );
}

export default Menu;

/*
  props:  {
    description: '',
    cost:''
  }
*/
