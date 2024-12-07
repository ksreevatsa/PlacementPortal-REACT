import axios from 'axios';

export const DeleteStudentData=async(id)=>{
    try{
     const response=await axios.delete(`http://localhost:2004/admin/${id}`);
     return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }

}