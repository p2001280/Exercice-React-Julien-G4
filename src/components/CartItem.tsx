import "../styles/Cart.css"

type CartItemType = {
  name: string;
  price: number;
  amount: number;
  picture: string;
};

function CartItem({ name, price, amount, picture }: CartItemType) {
  return (
    <div className = "cart-element">
      <div>
        <img className = "product-img" src = {picture} alt = {name}/>
      </div>
      <div className = "product-details">
        {name} {price}€
      </div>
    </div>
  );
}

export default CartItem;
