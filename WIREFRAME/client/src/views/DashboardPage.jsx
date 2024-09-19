import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
	const [gymList, setGymList] = useState([]);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/gyms/`)
			.then((response) => {
				setGymList(response.data);
			})
			.catch((errors) => {
				console.log("Error loading on Dashboard");
				setErrors("List of Gyms did not load");
			});
	}, []);


	const handleDelete = (deleteIDFromTable) => {
		axios.delete(`http://localhost:8001/api/gyms/${deleteIDFromTable}`)
			.then((response) => {
				setGymList(gymList.filter((gym) => gym._id != deleteIDFromTable))
			})
			.catch((errors) => console.log(errors));
	};



	return (
		<div>
			<h3 className="mx-3">Dashboard</h3>
			<table className="table mx-2">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Owner</th>
						<th scope="col">Managers on site</th>
						<th scope="col">Is it open?</th>
						<th scope="col">Remove</th>
					</tr>
				</thead>
				<tbody>
					{gymList.map((gym) => (
						<tr key={gym._id}>
							<td><Link to={`/gyms/${gym._id}`}>{gym.name}</Link></td>
							<td>{gym.owner}</td>
							<td>{gym.managers}</td>
							<td>{gym.isOpen ? "Yes" : "No"}</td>
							<td><button className="delete"  type="button" onClick={() => handleDelete (gym._id)}>Delete</button></td>
						</tr>
					))}
				</tbody>
			</table>
			<Link to="/gyms/add" className="mx-3">Ready to create a new gym?</Link>
		</div>
	);
};

export default DashboardPage;
