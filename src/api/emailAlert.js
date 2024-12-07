import axios from 'axios';

export const emailAlert=async(job,eid)=>{
    try{
      const response =await axios.post(`http://localhost:2004/notification/sendemailNotification/${eid}`,job);
      return response;
    }
    catch(error){
        throw new Error(error.response?.data);
    }
}