import React, { useState } from "react";

function Item({ name, category }) {
  const[addCart,setAddcart]=useState(true)
  const cartClass = addCart ? "" : "in-cart";
  const addCartBtn = addCart ? "Add to Cart" :"Remove from Cart";
  function handeAddToCart(){
    setAddcart((addCart) => !addCart)
    
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handeAddToCart}>{addCartBtn}</button>
    </li>
  );
}

export default Item;
