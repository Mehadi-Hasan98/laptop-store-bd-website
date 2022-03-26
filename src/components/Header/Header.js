import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Laptop Store BD</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;