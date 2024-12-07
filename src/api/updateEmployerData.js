import axios from "axios";

export const updateEmployerData=async(updatedId,updatedEmployer)=>{
    try {
        const response =await axios.put(`http://localhost:2004/admin/employer/update/${updatedId}`,updatedEmployer);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}