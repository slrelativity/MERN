import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreatePage = () => {
    const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [symptoms, setSymptoms] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate("");
	const [formErrors, setFormErrors] = useState({
		age: "Patient age is required!",
		name: "Patient name is required!",
		symptoms: "Patient sypmtoms are required!"

	});

    const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8001/api/patients/`, {name,	age, symptoms,})
			.then((response) => {	const newPatient = response.data;
				navigate("/patients");
			})
			.catch((errors) => {
				setErrors(errors.response.data.errors);
			});
	};


	const validateForm = () => {
		console.log(Object.values(formErrors))
		return Object.values(formErrors).every(value => value === "");
	}

	const ageHandler = (e) => {
		setAge (e.target.value);
		const value = e.target.value.trim();
		let errorMsg = "";
			if (value) {
				if (value < 1) {
					errorMsg = "Patient must be at least 1 year old!";
				} else if (value > 140) {
					errorMsg = "Patient  can not be older than 140!";
				}
				} else {
					errorMsg = "Patient age is required!";
			}
			setFormErrors({ ...formErrors, age: errorMsg});
	}

	const nameHandler = (e) => {
		setName (e.target.value);
		const value = e.target.value.trim();
		let errorMsg = "";
			if (value) {
				if (value.length < 1) {
					errorMsg = "Patient name is required!";
				} else if (value.length > 40) {
					errorMsg = "Patient name must be less than 40 characters long!";
				}
				} else {
					errorMsg = "Patient name is required!";
			}
			setFormErrors({ ...formErrors, name: errorMsg});
	}
	

	const symptomsHandler = (e) => {
		const value = e.target.value;
		setName (value);
		const words = value.split().filter(word => word.length > 0);
		let errorMsg = "";
			if (words.length > 0) {
				const invalidWords = words.filter(word => word.length < 4);
				if (invalidWords.length > 0) {
					errorMsg = "Each sypmtom must be at least 4 characters!";
				} else {
					errorMsg = "Patient symptoms are required!";
				}
			} setFormErrors({ ...formErrors, symptoms: errorMsg});
	}



    return(
        <div>
			<header className="d-flex justify-content-space-between">
			<h1 className="m-2">Admit Patient</h1>
			</header>
			<div>
				<form onSubmit={submitHandler}>
						<label className="form-label mx-2">Age</label>
							<input type="number" className="form-control mx-2" name="age" value={age} onChange={ageHandler}/>
							{formErrors.age && ( <p className="errorMessage"> {formErrors.age}</p>)}
							{errors.age && <p>{errors.age.message}</p>}
						<label className="form-label">Name</label>
							<input type="text" className="form-control mx-2" name="name"value={name} onChange={nameHandler}/>
							{formErrors.name && ( <p className="errorMessage"> {formErrors.name}</p>)}
							{errors.name && <p>{errors.name.message}</p>}
						<label className="form-label mx-2">Symptoms</label>
							<textarea name="symptoms" value={symptoms} onChange={symptomsHandler} />
							{formErrors.symptoms && ( <p className="errorMessage"> {formErrors.symptoms}</p>)}
							{errors.symptoms && <p>{errors.symptoms.message}</p>}
					<button className="submitButton" type ="submit" disabled={!validateForm()}>Admit</button>
				</form>
			</div>
		</div>
    ); 
};

export default CreatePage;
