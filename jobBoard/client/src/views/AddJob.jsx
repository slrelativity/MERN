import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const AddJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [isRemote, setIsRemote] = useState(false);

  const [errors, setErrors] =useState ({})

  const navigate = useNavigate();

  const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/jobs", {jobTitle, company, status, isRemote})
        .then(response=>{
            navigate("/");
            
        })
        .catch(errors=>{
          console.log(errors.response.data.errors);
          setErrors(errors.response.data.errors);
        })
  }



  return (
    <div>
      <h2>Add a New Job</h2>
      <form onSubmit={handleSubmit}>
          <div>
            <label className='form-label'>Job Title</label>
            <input type= "text" name="jobTitle" value={jobTitle} onChange={e=>setJobTitle(e.target.value)} className='form-control'/>
            {errors.jobTitle && <p>{errors.jobTitle.message}</p>}
          </div>
          <div>
            <label className='form-label'>Company</label>
            <input type= "text" name="company" value={company} onChange={e=>setCompany(e.target.value)} className='form-control'/>
            {errors.company && <p>{errors.company.message}</p>}
          </div>
          <div>
            <label className='form-label'>Status</label>
            <select name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}>
              <option value=""disabled>Pending</option>
              <option value="available">Available</option>
              <option value="taken">Taken</option>
            </select>
            {errors.status && <p>{errors.status.message}</p>}
          </div>
          <div>
            <label className='form-label'>Is Remote</label>
            <input type= "checkbox" name="isRemote" checked={isRemote} onChange={e=>setIsRemote(e.target.checked)}/>
          </div>
          <button className='btn btn-warning'>Submit</button>

      </form>
    </div>
  )
}

export default AddJob