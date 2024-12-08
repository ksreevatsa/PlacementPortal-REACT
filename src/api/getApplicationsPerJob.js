import axios from 'axios';

export const getApplicationsPerJob=async()=>{
   try {
     const response = await axios.get('https://placementportal-springboot-production.up.railway.app/stats/applications-per-job');
     return response;
   } catch (error) {
    throw new Error(error.response?.data);
   }
}