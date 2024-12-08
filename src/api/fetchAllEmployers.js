import axios from 'axios';

export const fetchAllEmployers=async()=>{
    try {
        const response = await axios.get('https://placementportal-springboot-production.up.railway.app/admin/getallemployers')
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}