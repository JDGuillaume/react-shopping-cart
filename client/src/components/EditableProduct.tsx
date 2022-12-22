import EditForm from './EditForm';
import { remove } from '../../services/productService';
import currency from '../../helper/numberFormat';
import { EditableProduct, ProductType } from '../types'; 

const Product = ({ product, products, setProducts, cart, setCart }: EditableProduct) => {
  const handleDelete = (id: string) => {
    setProducts(products.filter((product: ProductType) => product._id !== id));
    remove(product._id);
  };

  return (
    <div className="product">
      <div className="product-details"></div>
      <h3>{product.title}</h3>
      <p className="price">{`${currency.format(product.price)}`}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <EditForm
        product={product}
        setProducts={setProducts}
        products={products}
        cart={cart}
        setCart={setCart}
      />
      <a className="delete-button" onClick={() => handleDelete(product._id)}>
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
