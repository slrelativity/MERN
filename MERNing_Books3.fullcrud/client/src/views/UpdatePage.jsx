import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePage = () => {
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [pages, setPages] = useState("");
	const [isAvailable, setIsAvailable] = useState(false);
	const navigate = useNavigate("");
	const [errors, setErrors] = useState({});

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/books/${id}`)
			.then((response) => {
				const { title, author, pages, isAvailable } = response.data;
				setTitle(title);
				setAuthor(author);
				setPages(pages);
				setIsAvailable(isAvailable);
			})
			.catch(errors => console.log(errors));
		
	}, [id]);

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8001/api/books/${id}`, {title,author,pages,isAvailable})
			.then((response) => {
				navigate("/");
			})
			.catch(errors => {
				console.log(errors);
				setErrors(errors.response.data.errors);
			});
	};


	return (
		<div>
			<header id="customer"></header>
			{/* Update Page inputs are set to prefill */}
			<div>
				<form onSubmit={submitHandler}>
					<div>
						<label>Title:</label>
						<input
							type="text"
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						{errors.title && <p>{errors.title.message}</p>}
					</div>
					<div>
						<label>Author:</label>
						<input
							type="text"
							name="author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
						{errors.author && <p>{errors.author.message}</p>}
					</div>
					<div>
						<label>Pages:</label>
						<input
							type="number"
							name="pages"
							value={pages}
							onChange={(e) => setPages(e.target.value)}
						/>
						{errors.pages && <p>{errors.pages.message}</p>}
					</div>
					<div>
						<label>Is Available</label>
						<input
							type="checkbox"
							name="isAvailable"
							checked={isAvailable} // "Checked" replaces "Value" for the checkbox
							onChange={(e) => setIsAvailable(e.target.checked)} // "Checked" replaces "Value" for the checkbox
						/>
					</div>
					<button>Update Book!</button>
				</form>
			</div>
		</div>
	);
};

export default UpdatePage;
