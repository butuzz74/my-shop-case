import React from "react";

const GoodsItem = (props) => {
  const { id, name, description, price, full_background} = props;
  return <>
    <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name+description}/>          
        </div>
        <span className="card-title">{name}</span> 
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn bottom" onClick={()=>props.handleOrder({id, name, price})}>Купить</button>
          <span className="right">{price}</span>
        </div>
      </div>
  </>;
};

export default GoodsItem;
