import React, { useEffect, useState } from "react"; //Importing for the page to load when launched
import axios from "axios"; //Getting data from API uses AXIOS
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const DashboardPage = () => {
    const [bookList, setBookList] = useState([]);
	const [error, setError] = useState(null);
    const navigate = useNavigate();

	
    useEffect(() => {
		axios
			.get(`http://localhost:8001/api/books/`)
			.then((response) => {
				setBookList(response.data);
			})
			.catch((error) => {
				console.log("Error regarding book loading on Dashboard");
				setError("Books did not load.");
			});
	}, []);



	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>Page Count</th>
						<th>Available</th>
						<th>Book Page</th>
					</tr>
				</thead>
				<tbody>
					{
						bookList.map((book) => (
							<tr key={book._id}>
								<td>{book.title}</td>
								<td>{book.author}</td>
								<td>{book.pages}</td>
								<td>{book.isAvailable ? "Yes" : "No"}</td>
								<td>
									<Link to={`/books/${book._id}`}>Book Details</Link>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardPage;
