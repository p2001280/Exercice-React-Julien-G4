import { ProductType } from '../interfaces/type';
import "../styles/Cart.css"

type ProductProps = {
    product: ProductType; 
    addToCart: (product: ProductType) => void; 
};

function Product({ product, addToCart }: ProductProps) {
    return (
      <div className = "products-container">
        <p className = "product-name">Nom : {product.name}</p>
        <img className = "product-img" src={product.picture} alt={product.name} />
        <p className = "product-price">Prix : {product.price}€</p>
        <button className = "add-to-cart" onClick={() => addToCart(product)}>Ajouter au panier</button>
      </div>
    );
  }

export default Product;
