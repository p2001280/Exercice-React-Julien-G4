import { useState, useEffect } from 'react';
import CartItem from './CartItem'; 
import '../styles/Cart.css';

type CartType = {
  id: number,
  name: string;
  price: number;
  amount: number;
  picture: string,
}[];

function Cart({ cart, updateCart }: { cart: CartType; updateCart: Function }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce((acc, product) => acc + product.amount * product.price, 0);

  useEffect(() => {
    document.title = `${total}€ d'achats`;
  }, [total]);

  const renderCartItems = () => {
    const items: JSX.Element[] = [];

    cart.forEach(({ id, name, price, amount, picture }) => {
      for (let i = 0; i < amount; i++) {
        items.push(
          <div key={`${id}-${i}`}>
            <CartItem name={name} price={price} picture={picture} amount={1} />
          </div>
        );
      }
    });

    return items;
  };

  return isOpen ? (
    <div className="cart">
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>{renderCartItems()}</ul>
          <p className="amount">Total : {total}€</p>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed"></div>
  );
}

export default Cart;
