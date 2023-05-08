import React, { useState } from "react";
import "./itemform.scss";

export const ItemForm = (props) => {
  const { toggleAddModal } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const item = { title, price, description, image };

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");

      setError(null);
      console.log("new item added!", json);
    }
  };

  return (
    <div className="itemform-background" onClick={toggleAddModal}>
      <div className="itemform">
        <form className="itemform__create" onSubmit={handleSubmit}>
          <h3>Add a new Item</h3>
          <label>Item title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>Item price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <label>Item description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label>Item image link:</label>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          {/* <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/"
          />
          <label htmlFor="file" className="itemform__create--file">
            Upload Photo
          </label> */}
          <button className="itemform__create--button">Add new Item</button>
        </form>
      </div>
    </div>
  );
};
