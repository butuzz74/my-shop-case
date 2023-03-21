import React from "react";
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [] } = props;

  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} handleOrder={props.handleOrder}/>
      ))}
    </div>
  );
};

export default GoodsList;
