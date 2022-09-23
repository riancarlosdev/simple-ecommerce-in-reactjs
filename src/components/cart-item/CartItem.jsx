import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cartItem.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl, id } = cartItem;
  const {removeItemCart} = useContext(CartContext);
  
  return (
    <div className="cart-item-container">
      <div className="item-image" style={{backgroundImage: `url(${imageUrl})`}} alt={name} />
      <span className="name">{name}</span>
      <div>
        <button>-</button>
          {quantity}
        <button>+</button>
      </div>
      <span>{quantity * price}</span>
       <div className="actions">
        <button type="button" onClick={() => removeItemCart(id)}>remove</button>
      </div>
    </div>
  );
}

export default CartItem;
