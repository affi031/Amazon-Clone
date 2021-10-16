import React from 'react';
import'./Product.css';

function Product({id , title , price ,image}) {
    return (
        <div className="product">
            <div className="product--info">
            <p>{title}</p>
            {/* <p>by Ali Karim Sayed (Author)</p> */}

            <p className="product--price">
            <strong>₹</strong>
            <bold>{price}</bold>
            </p>
                
             <img className=" product--image" src={image} alt="" /> 
             </div>
             <button className="product--button">Add to Cart </button>  
           
        </div>
    )
}

export default Product