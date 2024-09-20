import React from "react";

function Menu(props) {
  const { id, title, price, desc, img } = props;
  return (
    <li className="list__item">
      <img src={img} alt="" />
      <div className="info__container">
        <div className="title__container">
          <h3 className="title">{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="description">{desc}</p>
      </div>
    </li>
  );
}

export default Menu;
