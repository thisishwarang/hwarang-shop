import React from 'react';
import { Link } from 'react-router-dom';
import {BsShop, BsFillPencilFill} from 'react-icons/bs';

export default function Navbar() {
    return (
        <header>
            <Link to='/'>
                <BsShop />
                <h1>Hwarang-shop</h1>
            </Link>
            <nav>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new'>
                    <BsFillPencilFill />
                </Link>
                <button>Login</button>
            </nav>
            
        </header>
    );
}

