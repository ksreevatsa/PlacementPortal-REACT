import axios from "axios";

export const updateStudentData=async(updatedId,updatedstudent)=>{
    try{
        const response=await axios.put(`http://localhost:2004/admin/update/${updatedId}`,updatedstudent);
        return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }
}