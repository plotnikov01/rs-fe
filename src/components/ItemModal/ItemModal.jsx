import React from "react";
import "./itemmodal.scss";

export const ItemModal = (props) => {
  const { products, itemId, toggleModal } = props;

  const selectedItem = products.find((item) => item._id === itemId);

  return (
    <>
      <div className="itemmodal__background" onClick={toggleModal}>
        <div className="itemmodal">
          <img
            src={selectedItem.image}
            alt={selectedItem.image}
            className="itemmodal__image"
          />
          <div className="itemmodal__info">
            <p className="itemmodal__info--title">{selectedItem.title}</p>
            <p className="itemmodal__info--price">${selectedItem.price}</p>
            <p className="itemmodal__info--description">
              {selectedItem.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
