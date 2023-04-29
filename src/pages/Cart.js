import { CartContext } from "../context/CartContext"
import useTitle from "../hooks/useTitle";
import CartCard from "../components/CartCard";
import { useContext, useState } from "react";
import "./cart.css"

const Cart = () => {
  const {total, cartList} = useContext(CartContext);
  useTitle("Cart");
  // const [count, setCount] = useState(1);
  let count = 1;
 
  return (
    <section className="cart">
      <h1>My Cart</h1>
      <div className="myCart">
        <div className="cartProd">
          {
            cartList.map(product => (
              <CartCard key={product.id} product={product} />
            ))
          }
        </div>
        <div className="cartList">
          <h3>Checkout List</h3>
          <div className="myList">
            {
              cartList.map(product=>(
                <div className="single" key={product.id}>
                  <div className="name">{count++}. {product.title}</div>
                  <div className="price">$ {product.price}</div>
                </div>
              ))
            }
          </div>
          <div className="listTotal">
            <div className="total">Total</div>
            <div className="totalPrice">$ {total}</div>
          </div>
          <button className="checkOut">Click To Checkout</button>
        </div>
      </div>

    </section>
  )
}

export default Cart