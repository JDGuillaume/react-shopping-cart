import { useEffect, useState } from 'react';
import { ProductType, CartItem } from './types'

import Cart from './components/Cart';
import Header from './components/Layout/Header';
import ProductListing from './components/ProductListing';
import Main from './components/Layout/Main';
import AddForm from './components/AddForm';
import { getAll } from '../services/productService';
import { getCart } from '../services/cartService';



const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAll();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart();
      setCart(cart);
    };

    fetchCart();
  }, []);

  return (
    <div id="app">
      <Header>
        <h1>The Shop</h1>
        <Cart cart={cart} setCart={setCart} />
      </Header>

      <Main>
        <ProductListing
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
        />
        <AddForm products={products} setProducts={setProducts} />
      </Main>
    </div>
  );
};

export default App;
