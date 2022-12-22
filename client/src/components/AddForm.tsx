import { ChangeEvent, useState } from 'react';
import { create } from '../../services/productService';
import { ProductProps, newProduct } from '../types';



const AddForm = ({ products, setProducts}: ProductProps) => {
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [formDisplay, toggleFormDisplay] = useState<boolean>(false);

  const resetForm = () => {
    setTitle(''), setPrice(0), setQuantity(0);
  };

  const handleCancel = () => {
    setVisible(!visible);
    toggleFormDisplay(false);
  };

  const handleDisplayForm = () => {
    setVisible(!visible);
    toggleFormDisplay(true);
  };

  const handleCreate = (newProduct: newProduct) => {
    create(newProduct).then(result => {
      setProducts(products.concat(result));
    });

    resetForm();
  };

  const handleSubmit = () => {
    const newProduct = {
      title,
      price,
      quantity,
    };

    handleCreate(newProduct);
    toggleFormDisplay(false);
  };

  const Form = () => {
    return (
      <>
        <h3 className={`${visible ? '' : 'not-visible'}`}>Add Product</h3>
        <form data-testid="add-form" title="Add a Product" aria-label="Add a Product" className={visible ? '' : 'not-visible'} onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              name="product-price"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              name="product-quantity"
              value={quantity}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="actions form-actions">
            <input
              className="button"
              type="submit"
              onClick={() => setVisible(!visible)}
              value="Add"
            />
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
      <div className="add-form">
        <p>
          <a
            className={`button ${visible ? 'not-visible' : ''}`}
            onClick={() => handleDisplayForm()}
            role="link"
          >
            Add A Product
          </a>
        </p>
        {formDisplay ? Form() : null}
      </div>
    </>
  );
};

export default AddForm;
