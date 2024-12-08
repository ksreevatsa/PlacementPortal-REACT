import axios from "axios";

export const updateStudentData=async(updatedId,updatedstudent)=>{
    try{
        const response=await axios.put(`https://placementportal-springboot-production.up.railway.app/admin/update/${updatedId}`,updatedstudent);
        return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }
}