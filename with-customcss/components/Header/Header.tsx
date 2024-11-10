"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import "./style.css";

const Header = () => {
    const [navStatus, setnavStatus] = useState<boolean>(false);

    const handleMenu = () => {
        setnavStatus(!navStatus);
    }

    return (
        <div>
            <header>
                <nav>
                    <div className="logo">LOGO</div>
                    <div className={`nav-list ${navStatus? "navlist-open": "navlist-close"}`}>
                        <div className='nav-options'><Link href={'#section-1'}>Home</Link></div>
                        <div className='nav-options'><Link href={'#section-2'}>About</Link></div>
                        <div className='nav-options'><Link href={'#section-3'}>Services</Link></div>
                        <div className='nav-options'><Link href={'#section-4'}>Contact</Link></div>
                        <Button type='hide-responsive'/>
                        </div>
                    <div id="menu-icon" onClick={handleMenu}>{navStatus ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
