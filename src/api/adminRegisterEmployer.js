import axios from 'axios';

export const adminRegisterEmployer=async(employer)=>{

    try{
        const response =await axios.post('http://localhost:2004/employer/insertemployer',employer);
        return response.data;
    }
    catch(error)
    {
        throw new Error(error.response?.data);
    }
}