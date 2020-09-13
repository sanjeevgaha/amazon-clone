import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
           <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo' /> 

           {/* search */}
           <div className="header__search">
                <input className = 'header__searchInput' type='text'/>
                {/* search logo */}
                <SearchIcon className='header__searchIcon' />
           </div>
           
           {/* header nav */}
           <div className="header__nav">
               {/* sign in */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Hello Sanjeev</span>
                    <span className='header__optionLineTwo'>Sign In</span>

                </div>

                {/* return and orders */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>&amp; Orders</span>
                    
                </div>

                {/* your prime */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>


           </div>
        </div>
    )
}

export default Header
