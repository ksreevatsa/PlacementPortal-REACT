import axios from 'axios';


export const fetchJobApplications=async(eid)=>{
    try {
        const response =await axios.get(`http://localhost:2004/jobs/getJobsByEmployer/${eid}`);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}