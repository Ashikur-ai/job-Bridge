import { Link } from 'react-router-dom';
import { axiosPublic } from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {
    const { data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs');
            return res.data;
        }
    })

    console.log(jobs)
    return (
        <div className='min-h-screen'>
            <p className='text-center text-5xl font-bold'>Available jobs</p>
            <div className='w-10/12 border mx-auto mt-10 rounded-lg p-5 grid grid-cols-3 gap-10'>
                {
                    jobs?.map(job => 
                        <Link key={job._id} to={`/jobDetails/${job._id}`}>
                            <div  className="card border bg-base-100 shadow-xl ">
                                <figure><img src="https://i.ibb.co/Zz712DP/icons.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {job.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p><span className='font-bold'>Company Name:</span> {job.company}</p>
                                    <p><span className='font-bold'>Salary:</span> {job.salary}</p>
                                    <p><span className='font-bold'>Location:</span> {job.location}</p>
                                    <p><span className='font-bold'>Application deadline:</span> {job.deadline}</p>
                                    <p><span className='font-bold'>Experience level:</span> {job.year}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )
               }
            </div>
        </div>
    );
};

export default AllJobs;