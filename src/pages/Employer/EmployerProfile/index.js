import { EmployerSidebar } from "../../../components/Employer/EmployerSidebar";



export const EmployerProfile=()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    return(
        <div className="overflow-x-hidden overflow-y-hidden flex gap-7">
            <EmployerSidebar/>
            <div className="flex flex-1 justify-center items-center">
        <div className="p-6 bg-gray-200 shadow-lg rounded-lg max-w-sm w-full text-center relative -top-24">
          <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
          <div className="space-y-2 text-left">
            <h2 className="text-lg">
              <span className="font-semibold">Id:</span> {user.id}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">CompanyName:</span> {user.companyName}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">ContactPerson:</span> {user.contactPerson}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Industry:</span> {user.industry}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Location:</span> {user.location}
            </h2>
            <h2 className="text-lg ">
                <span className="font-semibold">Website:</span>
              <a href={user.website}  target="_blank" rel="noopener noreferrer"className="text-blue-800 mx-2">{user.website}</a> 
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Phone Number:</span> {user.phoneNumber}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Role:</span> {user.role}
            </h2>
          </div>
        </div>
      </div>
        </div>
    )
}