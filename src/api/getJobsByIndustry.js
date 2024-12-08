import axios from 'axios';
export const getJobsByIndustry=async()=>{
    try {
        const response= await axios.get("https://placementportal-springboot-production.up.railway.app/stats/jobs-by-industry");
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}