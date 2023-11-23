import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaEye, FaPen, FaRegTrashAlt } from "react-icons/fa";

const JobList = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Applied job</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>My Jobs List</p>
            </div>
            <div className="overflow-x-auto  container mx-auto border rounded-lg mt-4 mb-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Job Type</th>
                            <th>Posted Date</th>
                            <th>Application Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Laravel Developer</th>
                            <td>Full Time</td>
                            <td>12/05/2023</td>
                            <td>12/09/2023</td>
                            <td className='flex gap-5'>
                                <div><FaEye></FaEye></div>
                                <div><FaPen></FaPen></div>
                                <div><FaRegTrashAlt></FaRegTrashAlt></div>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>Laravel Developer</th>
                            <td>Full Time</td>
                            <td>12/05/2023</td>
                            <td>12/09/2023</td>
                            <td className='flex gap-5'>
                                <div><FaEye></FaEye></div>
                                <div><FaPen></FaPen></div>
                                <div><FaRegTrashAlt></FaRegTrashAlt></div>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>Laravel Developer</th>
                            <td>Full Time</td>
                            <td>12/05/2023</td>
                            <td>12/09/2023</td>
                            <td className='flex gap-5'>
                                <div><FaEye></FaEye></div>
                                <div><FaPen></FaPen></div>
                                <div><FaRegTrashAlt></FaRegTrashAlt></div>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>Laravel Developer</th>
                            <td>Full Time</td>
                            <td>12/05/2023</td>
                            <td>12/09/2023</td>
                            <td className='flex gap-5'>
                                <div><FaEye></FaEye></div>
                                <div><FaPen></FaPen></div>
                                <div><FaRegTrashAlt></FaRegTrashAlt></div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;