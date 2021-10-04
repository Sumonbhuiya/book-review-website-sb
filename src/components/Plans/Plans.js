import React from 'react';

const Plans = () => {
    return (
        // home page course plan design details manually 
        <div className="p-6 mt-6 w-4/5 m-auto bg-gray-300">
            <h2 className="text-4xl pb-5 font-thin">Plans & Pricing</h2>
            <div className="grid grid-cols-3 gap-12">
                {/* first cart  */}
                <div className="rounded border border-gray-200 bg-blue-300 pb-6">
                    <div className="bg-blue-400">
                        <h2 className="text-5xl py-5 font-bold text-white">Trial</h2>
                    </div>
                    <div>
                        <div className=" py-5">
                            <h4 className="text-4xl text-white font-bold">$0</h4>
                            <p className="text-white text-xl pt-4">Enjoy! <br /> Free 7 Days</p>
                        </div>
                        <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-blue-400 hover:bg-yellow-500">I WANT THIS PLAN</button>
                    </div>
                </div>
                {/* second cart  */}
                <div className="rounded border border-gray-200 bg-green-300 pb-6">
                    <div className="bg-green-400">
                        <h2 className="text-5xl py-5 font-bold text-white">Monthly</h2>
                    </div>
                    <div>
                        <div className=" py-5">
                            <h4 className="text-4xl text-white font-bold">$39</h4>
                            <p className="text-white text-xl pt-4">Save $30 every year in monthly planning</p>
                        </div>
                        <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-green-400 hover:bg-yellow-500">I WANT THIS PLAN</button>
                    </div>
                </div>
                {/* third cart  */}
                <div className="rounded border border-gray-200 bg-yellow-300 pb-6">
                    <div className="bg-yellow-400">
                        <h2 className="text-5xl py-5 font-bold text-white">Yearly</h2>
                    </div>
                    <div className="pb-8">
                        <div className=" py-5">
                            <h4 className="text-4xl text-white font-bold">$89</h4>
                            <p className="text-white text-xl pt-4">Enjoy 10% discount by paying through bkash</p>
                        </div>
                        <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-yellow-400 hover:bg-red-500">I WANT THIS PLAN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;