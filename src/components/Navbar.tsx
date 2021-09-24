import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SearchOrJumpTo from './SearchOrJumpTo';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <header>
            <div className="siteLogo">
                <img src={logo} width={100} alt="Logo" />
            </div>
            <SearchOrJumpTo />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pull requests</Link>
                    </li>
                    <li>
                        <Link to="/">Issues</Link>
                    </li>
                    <li>
                        <Link to="/">Marketplace</Link>
                    </li>
                    <li>
                        <Link to="/">Explore</Link>
                    </li>
                </ul>
            </nav>
            <Dropdown />
        </header>
    )
}
