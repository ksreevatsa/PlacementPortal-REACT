import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Admin/Home';
import { AddStudent } from './pages/Admin/AddStudent';
import { Login } from './pages/common/Login';
import { Register } from './pages/User/Register';
import { Profile } from './pages/Admin/Profile';
import { ViewStudents } from './pages/Admin/ViewStudents';
import { DeleteStudent } from './pages/Admin/DeleteStudent';
import { UpdateStudent } from './pages/Admin/UpdateStudent';
import { AddEmployer } from './pages/Admin/AddEmployer';
import { ViewEmployers } from './pages/Admin/ViewEmployers';
import { DeleteEmployer } from './pages/Admin/DeleteEmployer';
import { UpdateEmployer } from './pages/Admin/UpdateEmployer';
import { UserHome } from './pages/User/UserHome';
import { UserProfile } from './pages/User/UserProfile';
import { UserJobs } from './pages/User/UserJobs';
import { AppliedJobs } from './pages/User/AppliedJobs';
import { EmployerHome } from './pages/Employer/EmployerHome';
import { AddJob } from './pages/Employer/AddJob';
import { EmployerJobs } from './pages/Employer/EmployerJobs';
import { JobApplications } from './pages/Employer/JobApplications';
import { EmployerProfile } from './pages/Employer/EmployerProfile';
import { UserApplication } from './pages/User/UserApplication';
import NoPage from './pages/common/NoPage';
import { LandingPage } from './pages/common/LandingPage';
import { Analysis } from './pages/Admin/Analysis';
import About from './pages/common/About';
function App() {
  return (
    <div>
       <Routes>
        <Route path='/adminhome' element={<Home/>}/>
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/viewstudents" element={<ViewStudents/>}/>
        <Route path="/deletestudent" element={<DeleteStudent/>}/>
        <Route path="/updatestudent" element={<UpdateStudent/>}/>
        <Route path="/addemployer" element={<AddEmployer/>}/>
        <Route path="/viewemployers" element={<ViewEmployers/>}/>
        <Route path='/deleteemployer' element={<DeleteEmployer/>}/>
        <Route path='/updateemployer' element={<UpdateEmployer/>}/>
        <Route path="/userhome" element={<UserHome/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/userjobs' element={<UserJobs/>}/>
        <Route path='/appliedjobs' element={<AppliedJobs/>}/>
        <Route path='/employerhome' element={<EmployerHome/>}/>
        <Route path='/employeraddjob' element={<AddJob/>}/>
        <Route path='/employerjobs' element={<EmployerJobs/>}/>
        <Route path='/jobapplications' element={<JobApplications/>}/>
        <Route path='/employerprofile' element={<EmployerProfile/>}/>
        <Route path='/application/:id' element={<UserApplication/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/jobanalysis' element={<Analysis/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
