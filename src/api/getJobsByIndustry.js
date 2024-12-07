import axios from 'axios';
export const getJobsByIndustry=async()=>{
    try {
        const response= await axios.get("http://localhost:2004/stats/jobs-by-industry");
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}