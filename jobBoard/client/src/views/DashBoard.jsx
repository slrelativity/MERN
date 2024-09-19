import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const [jobList, setJobList] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/`)
      .then(response => {
        console.log(response.data)
        setJobList(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  const handleDelete = (id) =>{
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
    .then(() =>{
      setJobList(Jobs.filter(job => job._id !== id));
    })
    .catch(error =>{
      console.error('Error Deleting Job');
    });
  };




  return (
    <div>
              <h1>Jobs Board</h1>
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col">Job Title</th>
                  <th scope="col">Company</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobList.map(eachJob => (
                    <tr key={eachJob._id}>
                      <td>{eachJob.jobTitle}</td>
                      <td>{eachJob.company}</td>
                      <td>{eachJob.status}</td>
                      <td>
                        <Link to={`/jobs/${eachJob._id}`}>Details</Link>
                        <button onClick={() => handleDelete(eachJob._id)}>Delete</button>
                      </td>
                      
                    </tr>
                  ))}
                  </tbody>
                  </table>
                  </div> 
                )}
                export default DashBoard