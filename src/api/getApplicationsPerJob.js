import axios from 'axios';

export const getApplicationsPerJob=async()=>{
   try {
     const response = await axios.get('http://localhost:2004/stats/applications-per-job');
     return response;
   } catch (error) {
    throw new Error(error.response?.data);
   }
}