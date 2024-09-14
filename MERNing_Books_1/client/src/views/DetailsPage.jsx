import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
    const {id} = useParams(); // This is from the route path of App.jsx
    const [bookList, setBookList] = useState(null);
    const navigate = useNavigate()

    useEffect(() =>{//Takes in 2 arguments
        axios.get(`http://localhost:8001/api/books/${id}`)
            .then(response => setBookList(response.data))
                .catch(error => console.log(error))
    }, [])

    const handleDelete = () =>{
        axios
					.delete(`http://localhost:8001/api/books/${id}`)
					.then((response) => {
						navigate("/");
					})
					.catch((error) => console.log(error));
    }

	return (
		<div>
			<header id="customer">
			</header>
			{bookList ? (
				<div>
					<h1>{bookList.title}</h1>
					<h3>By {bookList.author}</h3>
					<br />
					<h3>Page Count {bookList.pages}</h3>
					<h3>
						{bookList.isAvailable ? "Available for borrowing" : "Not available"}
					</h3>
					<button onClick={handleDelete}>Burrow</button>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

export default DetailsPage;