import axios from 'axios';

export const DeleteStudentData=async(id)=>{
    try{
     const response=await axios.delete(`https://placementportal-springboot-production.up.railway.app/admin/${id}`);
     return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }

}