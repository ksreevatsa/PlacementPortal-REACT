import axios from 'axios';

export const fetchAllEmployers=async()=>{
    try {
        const response = await axios.get('http://localhost:2004/admin/getallemployers')
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}