import axios from 'axios';

export const DeleteEmployerData=async(did)=>{
    try {
        const response=await axios.delete(`https://placementportal-springboot-production.up.railway.app/admin/employer?id=${did}`);
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}