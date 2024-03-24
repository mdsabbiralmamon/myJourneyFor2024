import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobApplication } from "../../utility/localStorage";

const Applied = () => {
    const allJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleDisplayJobs = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(appliedJobs => appliedJobs.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(appliedJobs => appliedJobs.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobsID = getSavedJobApplication();
        if (allJobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsID) {
                const job = allJobs.find(jobID => jobID.id == id)
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [allJobs]);
    console.log(appliedJobs, allJobs)
    return (
        <div>
            <h2>applied jobs : {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter Jobs</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleDisplayJobs('all')}><a>All</a></li>
                    <li onClick={() => handleDisplayJobs('remote')}><a>Remote</a></li>
                    <li onClick={() => handleDisplayJobs('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>{job.job_title} : {job.remote_or_onsite}</li>)
                }
            </ul>
        </div>
    );
};

export default Applied;