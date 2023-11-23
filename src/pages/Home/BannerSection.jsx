import React from 'react';
import { Helmet } from 'react-helmet-async';

const BannerSection = () => {
    return (
        <>
            <Helmet>
                <title>jobBridge | Home</title>
            </Helmet>
            <section className='justify-between min-h-screen w-full bg-cover bg-center grid grid-cols-4' style={{ backgroundImage: 'url(https://i.ibb.co/HCGNVWZ/Image-Banner.png)' }}>

                <div className='col-span-3 px-20 py-20 flex items-center'>
                    <div>
                        <p className='text-7xl font-bold mb-6'>Find A <span className='text-[#338573]'>Job</span> That <br /> <span className='text-[#338573]'>Matches</span> Your Passion </p>
                        <p className='mb-5'>
                            Hand-picked opportunities to work from home, <br />remotely, freelance, full-time, part-time, contract and internships.
                        </p>
                        <input type="text" placeholder="Type here" className="input input-bordered border-none shadow-lg md:w-full max-w-xs" /><span className='bg-[#338573] p-4 rounded-r-lg text-white -ml-4'>Search</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;