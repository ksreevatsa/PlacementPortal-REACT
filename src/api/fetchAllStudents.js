import axios from 'axios';

export const fetchAllStudents=async()=>{
    try{
       const response=await axios.get('http://localhost:2004/admin/getAllStudents');
       return response;
    }
    catch(error){
        throw new Error(error.response?.data?.message);
    }
}