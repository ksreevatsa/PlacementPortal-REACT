import axios from 'axios';

export const filterJobs=async(studentId)=>{
    try {
        const response=await axios.get( `http://localhost:2004/jobs/filter?studentId=${studentId}`);
        return response;

    } catch (error) {
        throw new Error(error.response?.data);
    }
}