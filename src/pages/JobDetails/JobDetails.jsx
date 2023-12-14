import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)
    const { company, deadline, description, level, location, qualification, requirement, responsibility, salary, website, title, year  } = job;
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Details</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>{ job.title }</p>
            </div>
            <div className='flex justify-center gap-5 py-5'>
                <a href={`${job.website}`}><button className="btn btn-outline">View Company</button></a>
                <Link className="btn text-white bg-[#338573]">Apply this job</Link>

            </div>
            <div className='container mx-auto'>
                <p>
                    Minimum Qualification: {qualification} <br />
                    Experience Level: {level} <br />
                    Experience Length: {year} <br />
                    Location: {location} <br />
                    Application Deadline: { deadline }<br />
                    Salary Range: {salary} <br />

                </p>
                <div className='py-5'>
                    <p className='font-bold'>Job Description</p>
                    <p>
                        {description}
                    </p>
                </div>

                <div className='py-5'>
                    <p className='font-bold'>Laravel Developer Requirements:</p>
                    <p>
                        {
                            requirement
                        }
                    </p>
                </div>

                <div className='py-5'>
                    <p className='font-bold'>Responsibilities:</p>
                    <p>
                        {
                            responsibility
                        }
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;