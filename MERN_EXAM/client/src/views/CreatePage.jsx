import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const [name, setName] = useState("");
	const [storeNumber, setStoreNumber] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate("");
	const [errors, setErrors] = useState({});



    const submitHandler = (e) => {
			e.preventDefault();
			axios.post("http://localhost:8001/api/stores", {name,storeNumber,isOpen,})
				.then((response) => {
					const newStore = response.data;
					navigate(`/stores/${newStore._id}`);
				})
				.catch((errors) => {
					console.log(errors.response.data.errors);
					setErrors(errors.response.data.errors);
				});
		};

	return (
		<div>
			<header id="customer">
				<h1>New Store</h1>
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
							name="storeNumber"
							value={storeNumber}
							onChange={(e) => setStoreNumber(e.target.value)}
						/>
						{errors.storeNumber && <p>{errors.storeNumber.message}</p>}
					</div>
					<div>
						<label>Open</label>
						<input
							type="checkbox"
							name="name"
							checked={isOpen}
							onChange={(e) => setIsOpen(e.target.checked)}
						/>
						{errors.isOpen && <p>{errors.isOpen.message}</p>}
					</div>
					<button>Add a new store</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePage;
