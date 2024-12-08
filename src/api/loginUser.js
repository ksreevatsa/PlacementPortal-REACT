import axios from 'axios';

export const loginUser=async(user)=>{
    try {
        const response=await axios.post('https://placementportal-springboot-production.up.railway.app/user/checklogin',user);
    return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}