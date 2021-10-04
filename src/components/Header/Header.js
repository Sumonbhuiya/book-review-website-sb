import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="flex items-center  bg-black justify-evenly">
            <div className="flex items-center">
                {/* header logo  */}
                <div className="flex items-center">
                    <img className="h-24 w-36" src={logo} alt="" />
                </div>
                {/* header nav links  */}
                <div className="pl-10 text-xl text-indigo-900">
                    <nav>
                        <NavLink activeStyle={{
                            textDecoration: "underline",
                            color: "darkorange"
                        }} className="m-6 text-2xl no-underline text-white" to="/home">Home</NavLink>
                        <NavLink activeStyle={{
                            textDecoration: "underline",
                            color: "darkorange"
                        }} className="m-6 text-2xl no-underline text-white" to="/service">Services</NavLink>
                        <NavLink activeStyle={{
                            textDecoration: "underline",
                            color: "darkorange"
                        }} className="m-6 text-2xl no-underline text-white" to="/about">About</NavLink>
                        <NavLink activeStyle={{
                            textDecoration: "underline",
                            color: "darkorange"
                        }} className="m-6 text-2xl no-underline text-white" to="/teacher">Teachers</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;