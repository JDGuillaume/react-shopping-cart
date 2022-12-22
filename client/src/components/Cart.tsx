import { useState, useEffect } from "react";
import currency from "../../helper/numberFormat";
import { checkout } from "../../services/cartService";
import { CartItem, CartProps } from "../types";

const Cart = ({ cart, setCart }: CartProps) => {
  const [total, setTotal] = useState(0)

  const handleCheckout = (): void => {
    checkout() 
    setCart([])
  }

  const calculateTotal = (cart: CartItem[]): number => {
    let total = 0;

    total = cart.reduce((sum, acc) => {
      const convertToPennies = acc.price * 100 * acc.quantity;
      sum += convertToPennies;
      return sum;
    }, 0) / 100;

    return total
  };

  useEffect(() => {
    setTotal(calculateTotal(cart))
  }, [cart])

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map(item => {
            return (
              <tr key={item._id}>
                <th>{item.title}</th>
                <th>{item.quantity}</th>
                <th>{`${currency.format(item.price)}`}</th>
              </tr>
            );
          })}
          <tr>
            <td colSpan={3} className="total">
              {`Total: ${currency.format(total)}`}
            </td>
          </tr>
        </tbody>
      </table>
      <a className="button checkout" onClick={handleCheckout}>Checkout</a>
    </div>
  );
};

export default Cart;
