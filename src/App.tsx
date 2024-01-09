import { useState, useEffect } from 'react';
import './App.css';
import Products from './pages/Products';
import Cart from './components/Cart';
import productsJSON from './products.json';
import { ProductType } from './interfaces/type';
import "./styles/Home.css";

function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductType) => {
    const updatedCart = [...cart];
    const foundProduct = updatedCart.find((item) => item.id === product.id);

    if (foundProduct) {
      foundProduct.amount += 1;
    } else {
      updatedCart.push({ ...product, amount: 1 });
    }

    updateCart(updatedCart);
  };

  return (
    <div className="App">
      <Cart cart={cart} updateCart={updateCart} />
      <header>
        <Products products={productsJSON as ProductType[]} addToCart={addToCart} />
      </header>
    </div>
  );
}

export default App;
