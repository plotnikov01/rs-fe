import React, { useEffect, useState } from "react";
import { Item } from "src/components/Item/Item";
import "./catalog.scss";
import { ItemForm, ItemModal } from "src/components";
import { Link } from "react-router-dom";

export const Catalog = (props) => {
  const { showAddItem, toggleAddModal } = props;

  const [products, setProducts] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleCardClick = (item) => {
    setSelectedItemId(item);
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="catalog">
        {products &&
          products.map((item) => (
            <Item
              title={item.title}
              price={item.price}
              image={item.image}
              key={item._id}
              onClick={() => handleCardClick(item._id)}
            />
          ))}
      </div>
      {showAddItem ? <ItemForm toggleAddModal={toggleAddModal} /> : ""}

      {selectedItemId && showModal ? (
        <ItemModal
          itemId={selectedItemId}
          products={products}
          toggleModal={toggleModal}
        />
      ) : (
        ""
      )}
    </>
  );
};
