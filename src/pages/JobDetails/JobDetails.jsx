import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Details</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>Laravel Developer(Full Time) - Match Company Limited </p>
            </div>
            <div className='flex justify-center gap-5 py-5'>
                <button className="btn btn-outline">View Company</button>
                <Link className="btn text-white bg-[#338573]">Apply this job</Link>

            </div>
            <div className='container mx-auto'>
                <p>
                    Minimum Qualification: Bachelor <br />
                    Experience Level: Mid level <br />
                    Experience Length: 2 years <br />
                    Location: San Francisco, USA <br />
                    Application Deadline: 12/08/2022 <br />
                    Salary Range: $ 105,000 - 150,000 <br />

                </p>
                <div className='py-5'>
                    <p className='font-bold'>Job Description</p>
                    <p>
                        We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business. To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce complete solutions in a short turnaround time.
                    </p>
                </div>

                <div className='py-5'>
                    <p className='font-bold'>Laravel Developer Requirements:</p>
                    <p>
                        
                        <li>A degree in programming, computer science, or a related field.</li>
                        
                        <li>Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
                        <li>A solid understanding of application design using Laravel.</li>
                        <li>Knowledge of database design and querying using SQL. </li>
                        <li>Proficiency in HTML and JavaScript. </li>
                        <li>Experience developing in Vue is considered a plus.</li>
                        <li>Practical experience using the MVC architecture.</li> 
                        <li>The ability to work on LAMP development environment Problem-solving skills and critical mindset.</li>
                        <li>Great communication skills.</li> 
                        <li>The desire and ability to learn.</li>
                    </p>
                </div>

                <div className='py-5'>
                    <p className='font-bold'>Responsibilities:</p>
                    <p>
                        <li>Discussing project aims with the client and development team.</li>
                        <li>Designing and building web applications using Laravel.</li> 
                        <li>Troubleshooting issues in the implementation and debug builds.</li> 
                        <li>Working with front-end and back-end developers on projects.</li>
                        <li>Testing functionality for users and the backend.</li>
                        <li>Ensuring that integrations run smoothly.</li> 
                        <li>Scaling projects based on client feedback.</li> 
                        <li>Recording and reporting on work done in Laravel.</li>
                        <li>Maintaining web-based applications.</li> 
                        <li>Presenting work in meetings with clients and management.</li>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;