import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
		const [storeList, setStoreList] = useState([]);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/stores`)
			.then((response) => {
				setStoreList(response.data);
			})
			.catch((errors) => {
				console.log("Error loading on Dashboard");
				setErrors("Stores did not load.");
			});
	}, []);

	const handleDelete = (deleteIDFromTable) => {
		axios.delete(`http://localhost:8001/api/stores/${deleteIDFromTable}`)
			.then((response) => {
				setStoreList(storeList.filter((store) => store._id != deleteIDFromTable))
			})
			.catch((errors) => console.log(errors));
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Store</th>
						<th>Store Number</th>
						<th>Open</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{storeList.map((store) => (
						<tr key={storeList._id}>
							<td>
								<Link to={`/stores/${store._id}`}>{store.name}</Link>
							</td>
							<td>{store.storeNumber}</td>
							<td>{store.isOpen ? "True" : "False"}</td>
							<td>
								<button type=" button" onClick={() => handleDelete (store._id)}>Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<Link to="/stores/add">Can't Find Store?</Link>
			</div>
		</div>
	);
};

export default DashboardPage;
