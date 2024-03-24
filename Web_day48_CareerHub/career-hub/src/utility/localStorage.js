const getSavedJobApplication = () => {
    const storedJobApplication = localStorage.getItem('jobApplication');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return []
}

const saveJobApplication = id =>{
    const saveJobApplication = getSavedJobApplication();
    const exists = saveJobApplication.find(jobID => jobID === id)
    if(!exists){
        saveJobApplication.push(id);
        localStorage.setItem('jobApplication', JSON.stringify(saveJobApplication));
    }
}

export { getSavedJobApplication , saveJobApplication}