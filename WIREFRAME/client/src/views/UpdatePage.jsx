import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdatePage = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [owner, setOwner] = useState("");
	const [managers, setManagers] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate("");

	useEffect(() =>{
		axios.get(`http://localhost:8001/api/gyms/${id}`)
		.then((response) => {
				const { name, owner, managers, isOpen } = response.data;
				setName(name);
				setOwner(owner);
				setManagers(managers);
				setIsOpen(isOpen);
			})
			.catch((errors) => console.log(errors));
	}, [id]);


	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8001/api/gyms/${id}`, {name,	owner, managers, isOpen,})
			.then((response) => {
				const updatedGym = response.data;
				navigate(`/gyms/${updatedGym._id}`)
			})
			.catch((errors) => {
				setErrors(errors.response.data.errors);
			});
	}; 

	return (
		<div>
			<header className="d-flex justify-content-space-between">
				<h3 className="m-2">Update {name}!</h3>
				<Link to="/" className="d-flex mx-3 m-2">go back home</Link>
			</header>
			<div>
				<form onSubmit={submitHandler}>
					<div className="m-2">
						<label className="form-label"></label>
							<input type="text" className="form-control"	placeholder="Gym Name" name="name" value={name}	onChange={(e) => setName(e.target.value)}/>
							{errors.name && <p>{errors.name.message}</p>}
					</div>
					<div className="m-2">
						<label className="form-label"></label>
							<input	type="text"	className="form-control" placeholder="Gym Owner" name="owner" value={owner}	onChange={(e) => setOwner(e.target.value)}/>
							{errors.owner && <p>{errors.owner.message}</p>}
					</div>
					<div className="m-2">
						<label className="col-sm 2 col-form-label"></label>
							<input	type="number" className="form-control"	placeholder="Gym Managers"	name="manager"	value={managers} onChange={(e) => setManagers(e.target.value)}/>
							{errors.managers && <p>{errors.managers.message}</p>}
					</div>
					<div className="m-2">
						<input	type="checkbox"	name="isopen" checked={isOpen} onChange={(e) => setIsOpen(e.target.checked)}/>
							<label className="form-label mx-2">Gym is open</label>
							{errors.isOpen && <p>{errors.isOpen.message}</p>}
					</div>
				</form>
				<button className="btn btn-success mx-2" onClick={submitHandler}>Update {name}</button>
				<Link to="/" className="btn btn-secondary mx-2">Cancel Update</Link>
			</div>
		</div>
	);
};

export default UpdatePage;
