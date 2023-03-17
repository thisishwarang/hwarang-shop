import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BsShop, BsFillPencilFill} from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Navbar() {
    const {user, login, logout} = useAuthContext();
    const handleLogin = () => {
        // login().then(setUser);
        login();
    }
    const handleLogout = () => {
        // logout().then(setUser);
        logout();
    }
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <BsShop />
                <h1>Hwarang-shop</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>Products</Link>
                {user && <Link to='/carts'>Carts</Link>}
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-2xl'>
                        <BsFillPencilFill />
                    </Link>
                )}
                {user && <User user={user} />}
                {!user && <Button text={'Login'} onClick={handleLogin}></Button>}
                {user && <Button text={'Logout'} onClick={handleLogout}></Button>}
            </nav>
            
        </header>
    );
}

