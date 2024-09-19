import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const CreatePage = () => {
	const [name, setName] = useState("");
	const [owner, setOwner] = useState("");
	const [managers, setManagers] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate("");

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8001/api/gyms/`, {name,	owner, managers, isOpen,})
			.then((response) => {
				const newGym = response.data;
				navigate("/");
			})
			.catch((errors) => {
				setErrors(errors.response.data.errors);
			});
	};

	return (
		<div>
			<header className="d-flex justify-content-space-between">
			<h3 className="m-2">Create a new gym</h3>
			<Link to="/" className="d-flex mx-5 m-2">go back home</Link>
			</header>
			<div>
				<form onSubmit={submitHandler}>
					<div>
						<label className="form-label"></label>
							<input type="text" className="form-control mx-2" placeholder="Gym Name"	name="name"	value={name} onChange={(e) => setName(e.target.value)}/>
							{errors.name && <p>{errors.name.message}</p>}
					</div>
					<div>
						<label className="form-label mx-2"></label>
							<input type="text"	className="form-control mx-2" placeholder="Gym Owner" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)}/>
							{errors.owner && <p>{errors.owner.message}</p>}
					</div>
					<div>
						<label className="form-label mx-2"></label>
							<input type="number" className="form-control mx-2" placeholder="Gym Managers" name="manager" value={managers} onChange={(e) => setManagers(e.target.value)}/>
							{errors.managers && <p>{errors.managers.message}</p>}
					</div>
					<div className="m-2">
						<input type="checkbox"  name="isopen" checked={isOpen} onChange={(e) => setIsOpen(e.target.checked)}/>
						<label className="form-label mx-2">Gym is open</label>
						{errors.isOpen && <p>{errors.isOpen.message}</p>}
					</div>
					<button className="create mx-1" onClick={submitHandler}>Add Gym</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePage;
