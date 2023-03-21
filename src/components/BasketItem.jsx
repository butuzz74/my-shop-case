import React from "react";

const BasketItem = (props) => {
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item">
      {name} x {quantity}={price * quantity}
      <span className="secondary-content">
        <i
          className="material-icons add-remove"
          onClick={() => props.handleAddItem(id)}
        >
          add
        </i>
        <i
          className="material-icons add-remove"
          onClick={() => props.handleDecreaseItem(id)}
        >
          remove
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => props.handleItemDelete(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};
export default BasketItem;
