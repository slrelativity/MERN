import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const DetailsPage = () => {
	const { id } = useParams();
	const [patientList, setPatientList] = useState("");
    const navigate =useNavigate();
 
	useEffect(() => {
		axios.get(`http://localhost:8001/api/patients/${id}`)
			.then((response) => setPatientList(response.data))
			.catch((errors) => console.log(errors));
	}, [id]);
    

    const handleDelete = () => {
			axios.delete(`http://localhost:8001/api/patients/${id}` )
				.then((response) => navigate("/"))
				.catch((errors) => console.log(errors));
				};
	return (
        <div>
            
			<header className="d-flex justify-content-space-between">
                <Link to={`/${id}/edit`} className="d-flex mx-3 m-2">Update</Link>
				<h1 className="m-2">{patientList.name} Details</h1>
			</header>
        {patientList ? (
            <div className="m-2">
					<h2>{patientList.age} years of age</h2>
					<h2>Symptoms</h2>
					<h2>{patientList.symptoms}</h2>
				</div>
			) : (
                <h2>Loading...</h2>
			)}
            <button  type="button" onClick={handleDelete} >Discharge Patient</button>

		</div>
	);
};

export default DetailsPage;
