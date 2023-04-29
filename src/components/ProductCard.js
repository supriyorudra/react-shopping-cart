import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const { cartList, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const { id, title, thumbnail, price } = product;

  useEffect(()=>{
    const productIsInCart = cartList.find(cartItem=> cartItem.id === id);

    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
     
  },[cartList, id])


  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <p className="name">{title}</p>
      <p className="price">&#36; {price}</p>

      { isInCart ? (<button onClick={()=> removeFromCart(product)}>Remove From Cart</button>) :  (<button onClick={()=> addToCart(product)}>Add to cart</button>)}
    </div>
  )
}

export default ProductCard