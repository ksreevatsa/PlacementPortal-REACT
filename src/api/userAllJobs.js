import axios from 'axios';



export const userAllJobs=async()=>{
    try{
       const response =await axios.get('https://placementportal-springboot-production.up.railway.app/jobs/getall');
       return response;
    }
    catch(error){
        throw new Error(error.response?.data);
    }
}