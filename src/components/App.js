import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [isDark, setIsdark] = useState(false)
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
function handelDark(){
  setIsdark((isDark)=> !isDark)
}
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handelDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
