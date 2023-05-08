import React from "react";
import "./item.scss";

export const Item = (props) => {
  const { title, price, image, id, onClick } = props;

  return (
    <div className="item" onClick={onClick}>
      <img src={image} alt={image} className="item__image" />
      <p className="item__title">{title}</p>
      <p className="item__price">${price}</p>
    </div>
  );
};
