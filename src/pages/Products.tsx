import { ProductType } from '../interfaces/type';
import ProductComponent from '../components/Product';
import "../styles/Product.css";

type ProductsProps = {
  products: ProductType[];
  addToCart: (product: ProductType) => void; 
};

function Products({ products, addToCart }: ProductsProps) {
  return (
    <div>
      <h2 className="title">Products</h2>
      <div className="products">
        {products.map((product) => (
            <ProductComponent product={product} addToCart={addToCart}/>
          ))}
      </div>
    </div>
  );
}

export default Products;
