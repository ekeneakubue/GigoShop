import React, {useState} from 'react'
import style from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import { FaOpencart, FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav>            
            <Link to = '/'>
                <div className={style.brand}>
                    <FaOpencart className={style.logo}/> GigoShop
                </div>
            </Link>
            <div 
                className={style.menu}
                onClick={() => {
                    setMenuOpen(!menuOpen) 
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? `${style.open}` : '' }>
                <li>
                    <NavLink 
                        to = '/'    
                        onClick={() => {
                            setMenuOpen(!menuOpen) 
                        }}
                    >
                        Home
                        <div className={style.t_line}></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/menu'
                        onClick={() => {
                            setMenuOpen(!menuOpen) 
                        }}
                    >
                        Menu
                        <div className={style.t_line}></div>
                    </NavLink>    
                </li>
                <li>
                    <NavLink 
                        to = '/about'
                        onClick={() => {
                            setMenuOpen(!menuOpen) 
                        }}
                    >
                        About
                        <div className={style.t_line}></div>
                    </NavLink>    
                </li>
                <li>
                    <NavLink 
                        to = '/contacts'
                        onClick={() => {
                            setMenuOpen(!menuOpen) 
                        }}
                    >
                        Contact
                        <div className={style.t_line}></div>
                    </NavLink>    
                </li>  
                <li>
                    <Link 
                        to = '/cart'
                        onClick={() => {
                            setMenuOpen(!menuOpen) 
                        }}
                    >
                        <div className={style.cart_icon}>
                            <FaCartShopping /> 
                            <div className={style.cart_count}>0</div>
                        </div>
                                               
                    </Link>    
                </li>  
                <li>
                    <Link
                        className={style.user_icon}
                        onClick={() => {
                            setShowMenu(!showMenu) 
                        }}
                    >
                        <FaUserCircle />
                    </Link> 
                    <div className={showMenu ? `${style.user_menu}` : '' }>
                        <Link 
                            to = '/login'
                            onClick={() => {
                                setShowMenu(!showMenu) 
                            }}
                        >
                            Login                       
                        </Link>
                        <Link 
                            to = '/register'
                            onClick={() => {
                                setShowMenu(!showMenu) 
                            }}
                        >
                            Register                       
                        </Link>
                    </div>                       
                </li>                        
            </ul>
        </nav>
    )
}

export default Header