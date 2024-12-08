import axios from 'axios';

export const getJobApplications=async(jobId)=>{
    try {
        const response =await axios.get(`https://placementportal-springboot-production.up.railway.app/application/getapplicationsbyid/${jobId}`);
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}