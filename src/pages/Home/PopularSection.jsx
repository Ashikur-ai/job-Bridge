import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const PopularSection = () => {
    return (
        <>
            <p className='text-4xl font-semibold text-center mt-10'>All Popular Listed jobs</p>

            <div className='pt-10 space-y-5'>

                <div className="container space-y-5 mx-auto grid lg:grid-cols-7 grid-rows-1 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className='text-white bg-[#338573] col-span-1 rounded- text-6xl font-bold text-center p-5 rounded-full'>f</div>

                    <div className='col-span-5 lg:mx-10'>
                        <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>

                    <Link to="/jobDetails" className="btn text-white bg-[#338573] col-span-1">View Details</Link>
                </div>


            </div>
            <div className='pt-10 space-y-5'>

                <div className="container space-y-5 mx-auto grid lg:grid-cols-7 grid-rows-1 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className='text-white bg-[#338573] col-span-1 rounded- text-6xl font-bold text-center p-5 rounded-full'>f</div>

                    <div className='col-span-5 lg:mx-10'>
                        <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>

                    <Link className="btn text-white bg-[#338573] col-span-1">View Details</Link>
                </div>


            </div>
            <div className='pt-10 space-y-5'>

                <div className="container space-y-5 mx-auto grid lg:grid-cols-7 grid-rows-1 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className='text-white bg-[#338573] col-span-1 rounded- text-6xl font-bold text-center p-5 rounded-full'>f</div>

                    <div className='col-span-5 lg:mx-10'>
                        <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>

                    <Link className="btn text-white bg-[#338573] col-span-1">View Details</Link>
                </div>


            </div>
            <div className='pt-10 space-y-5'>

                <div className="container space-y-5 mx-auto grid lg:grid-cols-7 grid-rows-1 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className='text-white bg-[#338573] col-span-1 rounded- text-6xl font-bold text-center p-5 rounded-full'>f</div>

                    <div className='col-span-5 lg:mx-10'>
                        <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>

                    <Link className="btn text-white bg-[#338573] col-span-1">View Details</Link>
                </div>


            </div>
            <div className='flex justify-center py-5'>
                <Link className="btn text-white bg-[#338573]">View more<FaArrowRightFromBracket></FaArrowRightFromBracket></Link>
            </div>
        </>
    );
};

export default PopularSection;