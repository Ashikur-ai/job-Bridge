import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddJob = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const result = await axiosSecure.post('/post_job', data);
        if (result.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job description has been added.",
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset();
    };



    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Post Job</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>Create A Job</p>
            </div>
            <div className="py-8 px-4 mx-auto w-4/5 lg:py-16 border rounded-lg my-10">
                <form onSubmit={handleSubmit(onSubmit)} action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* first row  */}
                        {/* company name  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" {...register("company")} name='company' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required="" />
                        </div>
                        {/* company website  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Website</label>
                            <input type="text" {...register("website")} name="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Website Link" required="" />
                        </div>

                        {/* second row  */}
                        {/* job title  */}
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                            <input type="text" name="title" {...register("title")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job Title" required="" />
                        </div>

                        {/* third row  */}
                        {/* Qualification  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Qualification</label>
                            <input type="text" name="qualification" {...register("qualification")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Minimum Qualification" required="" />
                        </div>
                        {/* Experience level  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience Level</label>
                            <input type="text" name="level" {...register("level")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Experience Level" required="" />
                        </div>

                        {/* fourth row  */}
                        {/* Experience Year  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience Year</label>
                            <input type="text" name="year" {...register("year")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Years of experience" required="" />
                        </div>
                        {/* Location  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input type="text" name="location" {...register("location")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job Location" required="" />
                        </div>

                        {/* fifth row  */}
                        {/* Application Deadline  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Deadline</label>
                            <input type="text" name="deadline" {...register("deadline")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Application Deadline" required="" />
                        </div>

                        {/* Salary Range  */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Range</label>
                            <input type="text" name="salary" {...register("salary")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Salary Range" required="" />
                        </div>

                        {/* Job Description  */}
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                            <textarea name="description" {...register("description")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job description here"></textarea>
                        </div>


                        {/* Job Requirement  */}
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Requirement</label>
                            <textarea name="description" {...register("requirement")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job requirements here"></textarea>
                        </div>

                        {/* Job Responsibilities  */}
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Responsibilities</label>
                            <textarea name="responsibility" {...register("responsibility")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job responsibilities here"></textarea>
                        </div>


                    </div>
                    <div className='flex justify-end'>
                        <input type="submit" className='btn btn-success text-white bg-green-700 mt-5' value="Post Job" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;