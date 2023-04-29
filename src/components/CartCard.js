import { useCart } from "../context/CartContext"
import "./CartCard.css"

const CartCard = ({product}) => {

  const { removeFromCart } = useCart();

  const {title, thumbnail, price } = product;

  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <p className="name">{title}</p>
      <p className="price">&#36; {price}</p>
      <button onClick={()=> removeFromCart(product)}>Remove From Cart</button>
    </div>
  )
}

export default CartCard