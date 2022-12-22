import { AllProps, ProductType } from '../types';
import Product from './EditableProduct';

const ProductListing = ({ products, setProducts, cart, setCart }: AllProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product: ProductType) => (
        <Product
          key={product._id}
          product={product}
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default ProductListing;
