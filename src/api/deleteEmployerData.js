import axios from 'axios';

export const DeleteEmployerData=async(did)=>{
    try {
        const response=await axios.delete(`http://localhost:2004/admin/employer?id=${did}`);
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}