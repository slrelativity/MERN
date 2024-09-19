import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailsPage = () => {
	const { id } = useParams();
	const [gymList, setGymList] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/gyms/${id}`)
			.then((response) => setGymList(response.data))
			.catch((errors) => console.log(errors));
	}, [id]);

	return (
		<div>
			<header className="d-flex justify-content-space-between">
				<h3 className="m-2">Gym Details</h3>
				<Link to="/" className="d-flex mx-5 m-2">go back home</Link>
			</header>
			{gymList ? (
				<div className="m-2">
					<h1 className="">{gymList.name}</h1>
					<h3 className="">Gym Owner: {gymList.owner}</h3>
					<h3 className="">Number of managers onsite: {gymList.managers}</h3>
					<h3 className="">{gymList.name} is: {gymList.isOpen ? "Open" : "Closed"}</h3>
					<Link to={`/gyms/edit/${gymList._id}`}className="btn btn-success">Edit {gymList.name}</Link>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default DetailsPage;
