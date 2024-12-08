import axios from 'axios';

export const fetchAllStudents=async()=>{
    try{
       const response=await axios.get('placementportal-springboot-production.up.railway.app/admin/getAllStudents');
       return response;
    }
    catch(error){
        throw new Error(error.response?.data?.message);
    }
}