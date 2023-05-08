import React from "react";
import "./button.scss";

const Button = (props) => {
  const { toggleModal } = props;
  return (
    <button className="button" onClick={toggleModal}>
      {props.children}
    </button>
  );
};

export default Button;
