import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [pages, setPages] = useState("");
	const [isAvailable, setIsAvailable] = useState(false);
	const navigate = useNavigate("");
	const [errors, setErrors] = useState({});

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8001/api/books", {title,
				author,
				pages,
				isAvailable,
			})
			.then((response) => {
				navigate("/");
			})
			.catch((errors) => {
				console.log(errors.response.data.errors);
				setErrors(errors.response.data.errors);
			});
	};

	return (
		<div>
			<header id="customer">
				<h1>Add a Book</h1>
			</header>
			<div>
				<form onSubmit={submitHandler}>
					<div>
						<label>Title</label>
						<input
							type="text"
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						{errors.title && <p>{errors.title.message}</p>}
					</div>
					<div>
						<label>Author</label>
						<input
							type="text"
							name="author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
						{errors.author && <p>{errors.author.message}</p>}
					</div>
					<div>
						<label>Pages</label>
						<input
							type="number"
							name="pages"
							value={pages}
							onChange={(e) => setPages(e.target.value)}
						/>
						{errors.pages && <p>{errors.pages.message}</p>}
					</div>
					<div>
						<label>Is it Available </label>
						<input
							type="checkbox"
							name="isavailable"
							checked={isAvailable}
							onChange={(e) => setIsAvailable(e.target.checked)}
						/>
						{errors.isAvailable && <p>{errors.isAvailable.message}</p>}
					</div>
					<button>Add Book!</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePage;
