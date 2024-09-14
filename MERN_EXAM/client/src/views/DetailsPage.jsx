import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailsPage = () => {
	const { id } = useParams();
	const [storeList, setStoreList] = useState(null);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/stores/${id}`)
			.then((response) => setStoreList(response.data))
		
			.catch((errors) => console.log(errors));
	}, [id]);


	return (
		<div>
			{storeList ? (
				<div>
					<h1>{storeList.storeNumber} Details</h1>
					<h3>{storeList.name}</h3>
					<h3>Store Number {storeList.storeNumber}</h3>
					<h3>{storeList.isOpen ? "Open" : "Closed"}</h3>
					<Link to={`/stores/edit/${storeList._id}`}>Edit Store Details</Link>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
			<div></div>
		</div>
	);
};

export default DetailsPage;
