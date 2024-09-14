import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdatePage = () => {
    const { id } = useParams();
	const [name, setName] = useState("");
	const [storeNumber, setStoreNumber] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate("");
	const [errors, setErrors] = useState({});


    useEffect(() => {
			axios
				.get(`http://localhost:8001/api/stores/${id}`)
				.then((response) => {
					const { name, storeNumber, isOpen } = response.data;
					setName(name);
					setStoreNumber(storeNumber);
					setIsOpen(isOpen);
				})
				.catch((errors) => console.log(errors));
		}, [id]);


	const submitHandler = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:8001/api/stores/${id}`, {name,storeNumber,isOpen,})
			.then((response) => {
				const updatedStore = response.data;
				navigate(`/stores/${updatedStore._id}`);
			})
			.catch((errors) => {
				console.log(errors);
				setErrors(errors.response.data.errors);
			});
	};

	return (
		<div>
			<header id="customer">
				<h1>Update store {storeNumber}</h1>
			</header>
			<div>
				<form onSubmit={submitHandler}>
					<div>
						<label>Store</label>
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{errors.name && <p>{errors.name.message}</p>}
					</div>
					<div>
						<label>Store Number</label>
						<input
							type="number"
							name = "storeNumber"
							value={storeNumber}
							onChange={(e) => setStoreNumber(e.target.value)}
						/>
						{errors.storeNumber && <p>{errors.storeNumber.message}</p>}
					</div>
					<div>
						<label>Open</label>
						<input
							type="checkbox"
							name="isOpen"
							checked={isOpen}
							onChange={(e) => setIsOpen(e.target.checked)}
						/>
						{errors.isOpen && <p>{errors.isOpen.message}</p>}
					</div>
					<button>Edit Store</button>
				</form>
			</div>
		</div>
	);
};

export default UpdatePage;
