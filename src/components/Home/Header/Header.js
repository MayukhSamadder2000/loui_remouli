import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

export default function Header(props) {
    return (
        <header>
            {
                //passing the grr that is state of APP to navigation along with change function
            }
            <NavBar count={props.grr} addMore={props.getChanged} />
            <div className="header__content">
                <div className="head">
                    <span>T</span>he <span>P</span>erfume <span>C</span>ompany
                </div>
                <div className="content">
                    Shop the latest fragnances <br/>
                    Impress your love with a touch of beautiful fragrance
                </div>
                <div className="btn btn-shop">
                    <a href="#shop">Shop Now</a>
                </div>
            </div>

        </header>
    )
}
