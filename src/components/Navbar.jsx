import React from 'react'
import { FaGripfire } from 'react-icons/fa';
import { BiShoppingBag } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='navbarDiv navbarBorder'>
            <div className='navbarLeft'>
                <div className='logo'><FaGripfire size={30}/></div>
                <h1 style={{fontSize : 25}}> Shopify</h1>
            </div>
            <div>

            </div>
            <div className='navbarRight'>
                <BiShoppingBag size={23}/>
                <p></p>
                <BiHeart size={23}/>
                <p></p>
                <BiUserCircle size={23}/>
            </div>
        </div>
    )
}

export default Navbar