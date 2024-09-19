import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";

const UpdatePage = () => {
    const {id} = useParams();

  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(response =>{
                const foundJob = response.data;
                setJobTitle(foundJob.jobTitle);
                setCompany(foundJob.company);
                setIsRemote(foundJob.isRemote);
                setStatus(foundJob.status);
            })
      .catch(errors => console.log(errors))
    },[id])

    const handleSubmit =(e) =>{
      e.preventDefault();
      axios.put(`http://localhost:8000/api/jobs/${id}`, {jobTitle, company, status, isRemote})
        .then(response=>{
            navigate(`/jobs/${id}`)

        })
        .catch(errors=>{
          console.log(errors);
          setErrors(errors.response.data.errors);  
        })
    }

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
        .then(response=>{
          navigate('/')
        })
        .catch(errors=>console.log(errors))

    }

    return (
      <div>
        <h2>Edit Job Posting</h2>
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
              <option value="pending">Pending</option>
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
          <button type="button" className='btn btn-danger' onClick={handleDelete}>Delete</button>
      </form>
    </div>
  )
}

export default UpdatePage