import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState('')

  const handleActive = () => {
    setActive(!active);
  };
  const handleAddItem = (id) => {
    setOrder(
      order.map((elem) => {
        if (elem.id === id) {
          elem.quantity += 1;
          const newElem = { ...elem };
          return newElem;
        } else {
          return elem;
        }
      })
    );
  };
  const handleDecreaseItem = (id) => {
    setOrder(
      order.map((elem) => {
        if (elem.id === id) {
          elem.quantity > 0 ? (elem.quantity -= 1) : (elem.quantity = 0);
          const newElem = { ...elem };
          return newElem;
        } else {
          return elem;
        }
      })
    );
  };
  const handleItemDelete = (id) => {
    setOrder(order.filter((elem) => elem.id !== id));
  };
  const handleDeleteAlert = () =>{
    setAlert('')
  }

  useEffect(function getData() {
    fetch(API_URL, {
      headers: {
        Authorization: "d5c7d37f-b5bc4173-9d51e37a-944d8b55",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  const handleOrder = (item) => {
    const itemIndex = order.findIndex((elem) => elem.id === item.id);
    if (itemIndex < 0) {
      setOrder([...order, { ...item, quantity: 1 }]);
    } else {
      order[itemIndex].quantity += 1;
      const newOrder = [...order];
      setOrder(newOrder);
    }
    setAlert(item.name)
  };

  return (
    <>
      <Cart order={order.length} handleActive={handleActive} />
      <main className="main">
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} handleOrder={handleOrder} />
        )}
        {active ? (
          <BasketList
            order={order}
            handleActive={handleActive}
            handleItemDelete={handleItemDelete}
            handleAddItem={handleAddItem}
            handleDecreaseItem={handleDecreaseItem}
          />
        ) : null}
        {alert&&<Alert name={alert} handleDeleteAlert={handleDeleteAlert}/>}
      </main>
    </>
  );
};

export default Shop;
