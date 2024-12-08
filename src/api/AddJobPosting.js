import axios from 'axios';

export const AddJobPosting=async(jobData,eid)=>{
    try {
        const response =await axios.post(`https://placementportal-springboot-production.up.railway.app/jobs/addjob/${eid}`,jobData);
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}