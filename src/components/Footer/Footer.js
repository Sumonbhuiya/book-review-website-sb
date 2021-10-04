import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        // footer section 
        <div className="bg-black">
            <h1 className="text-4xl py-3 text-white font-bold">NEED SOME HELP!!</h1>
            <div className="flex justify-evenly">
                {/* footer logo  */}
                <div className="flex items-center">
                    <img className="h-24 w-36" src={logo} alt="" />
                </div>
                {/* footer contact  */}
                <h1 className="text-xl pb-3 text-white font-thin">Contact</h1>
                <div className="text-center">
                    <p className="text-white">150-st, Farmgate, Dhaka-1215</p>
                    <p className="text-white">learning@support.com</p>
                    <p className="text-white">(+02)248759</p>
                </div>
            </div>
            <p className="text-white py-5">© 2021 All Right reservs by Sumon</p>
        </div>
    );
};

export default Footer;