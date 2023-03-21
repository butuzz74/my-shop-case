import React from "react";

const Cart = (props) => {
  const { order = 0 } = props;

  return (
    <div className="cart purple darken-2 white-text">
      <i className="small material-icons" onClick={props.handleActive}>
        shopping_basket
      </i>
      {order ? <span className="cart-quantity">{order}</span> : null}
    </div>
  );
};
export default Cart;
