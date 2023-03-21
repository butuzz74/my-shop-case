import React from "react";
import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const { order = [] } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basketlist">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((elem) => (
          <BasketItem
            key={elem.id}
            {...elem}
            handleItemDelete={props.handleItemDelete}
            handleAddItem={props.handleAddItem}
            handleDecreaseItem={props.handleDecreaseItem}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость : {totalPrice}</li>
      <i className="material-icons basket-close" onClick={props.handleActive}>
        close
      </i>
    </ul>
  );
};

export default BasketList;
