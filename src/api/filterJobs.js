import axios from 'axios';

export const filterJobs=async(studentId)=>{
    try {
        const response=await axios.get( `https://placementportal-springboot-production.up.railway.app/jobs/filter?studentId=${studentId}`);
        return response;

    } catch (error) {
        throw new Error(error.response?.data);
    }
}