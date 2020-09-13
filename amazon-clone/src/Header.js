import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
           <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo' /> 

           {/* search */}
           <div className="header__search">
                <input className = 'header__searchInput' type='text'/>
                {/* search logo */}
           </div>
           
           {/* header nav */}
           <div className="header__nav">
               {/* sign in */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Hello Sanjeev</span>
                    <span className='header__optionLinTwo'>Sign In</span>

                </div>

                {/* return and orders */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLinTwo'>&amp; Orders</span>
                    
                </div>

                {/* your prime */}
                <div className='header__option' >
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLinTwo'>Prime</span>
                </div>

           </div>
        </div>
    )
}

export default Header
