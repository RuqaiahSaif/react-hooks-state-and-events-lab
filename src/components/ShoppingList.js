import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory]= useState("All");
  function handelSelect(e){
    setselectedCategory(e.target.value)

  }
  const selectItem = items.filter((food)=>{
    if (selectedCategory==="All")
    return true
    else {
      return food.category === selectedCategory}
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={handelSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
