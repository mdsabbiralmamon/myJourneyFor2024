import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    console.log(id, jobs);
    const currentJob = jobs.find(job => job.id == id);
    const {job_description, job_responsibility, educational_requirements, experiences } = currentJob;

    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast.success('Applied');
    }

    return (
        <div>
            <div className="grid gap-4 grid-cols-4">
                <div className="border rounded-lg col-span-4 md:col-span-3 p-4">
                    <p><span className="text-lg font-bold">Job Description:</span>{job_description}</p> 
                    <br />
                    <p><span className="text-lg font-bold">Job Responsibility:</span>{job_responsibility}</p>
                    <br />
                    <p><span className="text-lg font-bold">Job Requirements:</span> <br /> {educational_requirements}</p>
                    <br />
                    <p><span className="text-lg font-bold">Experiences:</span> <br /> {experiences}</p>
                </div>
                <div className="border rounded-lg col-span-4 md:col-span-1 p-4">
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">apply now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;