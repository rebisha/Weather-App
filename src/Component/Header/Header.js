import React from 'react';
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Logo from "./logo.png";

import "./header.scss";

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt="logo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search..." />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option--first">Hello, Rebisha</span>
                        <span className="header__option--second">Sign In</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__option--first">Returns</span>
                        <span className="header__option--second">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option--first">Try</span>
                        <span className="header__option--second">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__option--second header__optionBasket--count">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;


