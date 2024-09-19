import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
	const [patientList, setPatientList] = useState([]);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/patients/`)
			.then((response) => {
				setPatientList(response.data);
			})
			.catch((errors) => {
				setErrors("List of patients did not load");
			});
	}, []);

	return (
		<div>
            <Link to="/"className="mx-3">Admit</Link>
			<h2>HOSPITAL MANAGER</h2>
				
			{patientList.map((patient) => (
			<fieldset>
				<form key={patient._id}>
                        <Link to={`/${patient._id}/details`} className="mx-3">{patient.name}</Link>
                        <br />
                        <Link to={`/${patient._id}/edit`} className="mx-3">Edit</Link>
						<h3>{patient.age}</h3>
						<h3>{patient.symptoms}</h3>
					</form>
			</fieldset>
            ))}
		</div>
	);
};

export default DashboardPage;
