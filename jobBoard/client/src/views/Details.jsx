import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios';


const Details = () => {
  const {id} = useParams();
  const [jobList, setJobList] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(response => setJobList(response.data))
      .catch(err => console.log(err))
  }, [id])

    return (
        <div>
            {
              jobList?
              <div className="card">
                  <div className="card-body">
                        <h5 className="card-title">Job Title: {jobList.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Company: {jobList.company}</h6>
                        <p className="card-text">Remote: {<job className="isRemote"></job>? 'yes': 'no'}</p>
                        <p className="card-text">Status: {jobList.status}</p>
                        {/* <a href="#" class="card-link">Card link</a> */}

                  </div>
                  
                    <Link to={`/jobs/${jobList._id}/edit`}>Edit</Link>
                  
              </div>:
              <h1>Loading....</h1>

          }
        </div>
  )
}

export default Details