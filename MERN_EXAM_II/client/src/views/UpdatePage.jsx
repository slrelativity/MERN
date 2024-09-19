import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdatePage = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [symptoms, setSymptoms] = useState("");
	const [errors, setErrors] = useState ({});
	const navigate = useNavigate("");

	useEffect(() =>{
		axios.get(`http://localhost:8001/api/patients/${id}`)
		.then((response) => {
				const { name, age, symptoms} = response.data;
				setName(name);
				setAge(age);
				setSymptoms(symptoms);
			})
			.catch((errors) => console.log(errors));
	}, [id]);


	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8001/api/patients/${id}`, {name,	age, symptoms,})
			.then((response) => {
				const updatedPatient = response.data;
				navigate(`/${updatedPatient._id}/details`)
			})
			.catch((errors) => {
				setErrors(errors.response.data.errors);
			});
	}; 

	return (
		<div>
			<header className="d-flex justify-content-space-between">
				<Link to={`/${id}/details`} className="d-flex mx-3 m-2">Details</Link>
				<h1 className="m-2">Update {name}</h1>
			</header>
			<div>
				<form onSubmit={submitHandler}>
				<div>
						<label className="form-label mx-2">Age</label>
							<input type="number" className="form-control mx-2" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
							{errors.age && <p>{errors.age.message}</p>}
					</div>
					<div>
						<label className="form-label">Name</label>
							<input type="text" className="form-control mx-2" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
							{errors.name && <p>{errors.name.message}</p>}
					</div>
					<div>
						<label className="form-label mx-2">Symptoms</label>
							<textarea name="symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}/>
							{errors.symptoms && <p>{errors.symptoms.message}</p>}
					</div>
				</form>
				<button className="btn btn-success mx-2" onClick={submitHandler}>Update</button>
			</div>
		</div>
	);
};

export default UpdatePage;
