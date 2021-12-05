//Subtotal.js
import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";

function Subtotal() {
  const [{cart}, dispatch] = useStateValue();  

  return (
    <div className="subtotal">
      <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getCartTotal(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;

