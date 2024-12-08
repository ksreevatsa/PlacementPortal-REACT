import axios from "axios";

export const updateEmployerData=async(updatedId,updatedEmployer)=>{
    try {
        const response =await axios.put(`placementportal-springboot-production.up.railway.app/admin/employer/update/${updatedId}`,updatedEmployer);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}