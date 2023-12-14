import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { axiosPublic } from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const PopularSection = () => {

    const { data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs');
            return res.data;
        }
    })

    console.log(jobs)

    return (
        <>
            <p className='text-4xl font-semibold text-center mt-10'>All Popular Listed jobs</p>

            {
                jobs?.map(job => <div key={job._id} className='pt-10 space-y-5'>

                    <div className="container space-y-5 mx-auto grid lg:grid-cols-7 grid-rows-1 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


                        <div className='col-span-6 lg:mx-10'>
                            <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>
                            <h5 className="mb-2  text-sm font-bold tracking-tight text-gray-900 dark:text-white">{job.company}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{job.description}</p>
                        </div>

                        <Link to="/jobDetails" className="btn text-white bg-[#338573] col-span-1">View Details</Link>
                    </div>


                </div>)
            }

            <div className='flex justify-center py-5'>
                <Link className="btn text-white bg-[#338573]">View more<FaArrowRightFromBracket></FaArrowRightFromBracket></Link>
            </div>
        </>
    );
};

export default PopularSection;