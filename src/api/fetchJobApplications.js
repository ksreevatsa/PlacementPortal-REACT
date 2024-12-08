import axios from 'axios';


export const fetchJobApplications=async(eid)=>{
    try {
        const response =await axios.get(`https://placementportal-springboot-production.up.railway.app/jobs/getJobsByEmployer/${eid}`);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}