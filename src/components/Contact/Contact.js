import React from 'react';

const Contact = () => {
    return (
        // given contact details 
        <div className="bg-gray-600 p-10">
            <h1 className="text-6xl pb-8 text-white font-bold">LEARNING CENTER</h1>
            <div className="flex justify-evenly p-5">
                <div className="text-right">
                    <p className="text-white">Farmgate, Dhaka-1215</p>
                    <p className="text-white">150-St</p>
                </div>
                <div className="text-left">
                    <p className="text-white">Email: sumon21@gmail.com</p>
                    <p className="text-white">Phone: 017******33</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;