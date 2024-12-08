import axios from 'axios';

export const submitApplication=async(formData)=>{
  try {
    const response=await axios.post('https://placementportal-springboot-production.up.railway.app/application/apply',formData);
    return response;
  } catch (error) {
    throw new Error(error.response?.dat);
  }
}