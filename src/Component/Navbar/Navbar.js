import React from "react";
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faCartShopping , faCaretDown , faBars} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';



const Navbar = () =>{
    return(
        <nav>
            <div className="container">
                <div className="nav-all">
                    <div className="open-menu">
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    <div className="logo">
                        <img src={logo} title="logo"/>
                    </div>
                    <div className="menu">
                        <ul className="f-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCaretDown}/> Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="search">
                            <FontAwesomeIcon icon={faSearch} />                
                            <input type="search"/>
                        </div>
                        <div className="shopping-cart">
                            <FontAwesomeIcon icon={faCartShopping} />                
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;