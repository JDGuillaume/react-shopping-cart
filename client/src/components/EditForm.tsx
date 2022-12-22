import { useState, useEffect } from 'react';
import { addToCart } from '../../services/cartService';
import {  update } from '../../services/productService';
import { EditableProduct, newProduct} from '../types'

const Form = ({ product, products, setProducts, cart, setCart }: EditableProduct) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [id, setId] = useState('');
  const [visible, setVisible] = useState(false);
  const [formDisplay, toggleFormDisplay] = useState(false);

  const handleCancel = () => {
    setVisible(!visible);
    toggleFormDisplay(false);
  };

  const handleEdit = () => {
    setVisible(!visible);
    toggleFormDisplay(true);
  };

  const handleUpdate = (newProduct:newProduct) => {
    update(id, newProduct).then(result => {
      setProducts(
        products.map(product => {
          if (product._id === id) {
            return result;
          } else {
            return product;
          }
        })
      );
    });
  };

  const handleSubmit = () => {

    const newProduct = {
      title,
      price,
      quantity,
    };

    handleUpdate(newProduct);
    toggleFormDisplay(false);
  };

  const handleAddToCart = () => {
    addToCart(id).then(result => {
      console.log(result)
      setProducts(
        products.map(item => {
          if (item._id === id) {
            return result.product;
          } else {
            return item;
          }
        })
      );

      const existingCartItems = cart.map(item => item.productId);

      if (existingCartItems.includes(id)) {
        setCart(
          cart.map(item => {
            if (item.productId === id) {
              return result.item;
            } else {
              return item;
            }
          })
        );
      } else {
        setCart(cart.concat(result.item));
      }
    });
  };

  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setQuantity(product.quantity);
    setId(product._id);
  }, []);

  const Form = () => {
    return (
      <>
        <div className='edit-form'>
          <h3 className={`${visible ? '' : 'not-visible'}`}>Edit Product</h3>
        </div>
        <form className={visible ? '' : 'not-visible'} onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="actions form-actions">
            <a className="button" type="submit" onClick={handleSubmit}>
              Update
            </a>
            <a className="button" onClick={() => handleCancel()}>
              Cancel
            </a>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      <div
        className={`actions product-actions ${visible ? 'not-visible' : ''}`}
      >
        <a
          className={`button add-to-cart ${
            product.quantity === 0 ? 'disabled' : ''
          }`}
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </a>
        <a className={`button edit`} onClick={() => handleEdit()}>
          Edit
        </a>
      </div>
      {formDisplay ? Form() : null}
    </>
  );
};

export default Form;
