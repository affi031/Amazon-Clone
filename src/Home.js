import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="loading" />

            <div className="home--row">
            <Product 
            id="01"
            title="See U in C"
            price={4450}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg" 
            />
            <Product 
            id="02"
            title="Realme Watch Classic Band"
            price={4900}
            image="https://images-eu.ssl-images-amazon.com/images/I/41nE84aLWVL._SX300_SY300_QL70_FMwebp_.jpg" 
            />
            <Product 
            id="03"
            title="Apple iPhone 13 Mini (256GB)"
            price={79900}
            image="https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY218_.jpg" 
            />
            </div>

            <div className="home--row">
            <Product 
            id="04"
            title="ASUS ROG Strix G17 (2021) 17.3-inch"
            price={40000}
            image="https://m.media-amazon.com/images/I/81Vr3jzftaL._AC_UY218_.jpg"
             />
            <Product

            id="05"
            title="Victorinox Fieldforce"
            price={29700}
            image="https://m.media-amazon.com/images/I/81LnZ7jN7pL._AC_UL320_.jpg"
             />
            </div>

            <div className="home--row">
            <Product

            id="06"
            title="OnePlus 80 cm (32 inch) "
            price={79900}
            image="https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY218_.jpg"
             />  
            </div>
            </div>
        </div>
    )
}

export default Home
