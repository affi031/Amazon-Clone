import React from 'react'
import './Subtotal.css';

function Subtotal() {
    return (
        <div className="subtotal">
            <p> Sub Total (2 Item): <strong>0 </strong> </p>
            <small className="subtotal__gift">

            <input type="checkbox"/> This order contains a gift
            </small>
            <button> Proceed to Buy </button>
        </div>
    )
}

export default Subtotal