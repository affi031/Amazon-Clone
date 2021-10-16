import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';  
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from "react-router-dom";
function Header() {
    return (
      
        <div className="header">
          <Link to="/">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
           </Link>
          
            {/* material hi */}
            <LocationOnOutlinedIcon  className="header--locationIcon"/>
              
          
              <div className="header--address">


            <div className="header--addressLineOne">Hello
            </div>
            <div className="header--addressLineTwo">
Select your address
            </div> 
            </div>

          <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* Material UI */}
          <SearchIcon className="header--searchIcon"/>
          </div>  

          <div className="header--nav">
            <div className="header--option">
            <span className="header--optionLineOne">Hello,Sign In</span>
            <span className="header--optionLineTwo">Account & Lists</span>
            </div>

            <div className="header--option">
            <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Orders</span>
            </div>

            {/* <div className="header--option">
            <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div> */}

          </div>  
         <Link to="/checkout">
         <div className="header--optionBasket"><ShoppingCartOutlinedIcon/>
         
          <span className="header--optionBasket header--optionBasketCount" >0</span>
         </div>
         </Link>
        </div>
    )
}

export default Header;