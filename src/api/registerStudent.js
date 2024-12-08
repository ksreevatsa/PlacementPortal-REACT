import axios from 'axios';


export const registerStudent=async(student,profilePhoto)=>{

    try{
        const formData=new FormData();
        formData.append("photo", profilePhoto);
        formData.append(
            "student",
            new Blob([JSON.stringify(student)], { type: "application/json" })
          );
    const response=await axios.post('placementportal-springboot-production.up.railway.app/student/insertstudent',formData);
    return response.data;
    }
    catch(error)
    {
        throw new Error(error.response?.data);
    }
}