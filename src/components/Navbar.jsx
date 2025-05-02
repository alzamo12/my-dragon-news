import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="flex gap-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-6">
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;