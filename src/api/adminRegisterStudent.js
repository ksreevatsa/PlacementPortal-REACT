import axios from 'axios';


export const adminRegisterStudent=async(student,profilePhoto)=>{

    try{
        const formData=new FormData();
        formData.append("photo", profilePhoto);
        formData.append(
            "student",
            new Blob([JSON.stringify(student)], { type: "application/json" })
          );
    const response=await axios.post('https://placementportal-springboot-production.up.railway.app/admin/insertstudent',formData);
    return response.data;
    }
    catch(error)
    {
        throw new Error(error.response?.data);
    }
}