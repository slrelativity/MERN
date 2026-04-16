import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
	const [musicList, setMusicList] = useState([]);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/music/`)
			.then((response) => {
				setMusicList(response.data);
			})
			.catch((errors) => {
				setErrors("List of music did not load");
			});
	}, []);

	return (
		<div>
			{musicList.filter((music, i) =>{
				return music.name.includes(searchTerm)
			})	.map((music,i) => 
	
			<fieldset>
				<form key={music._id}>
                        <Link to={`/${music._id}/details`} className="mx-3">{music.title}</Link>
                        <br />
						<h3>{music.artist}</h3>
					</form>
			</fieldset>
	)}
		</div>
	);
};

export default DashboardPage;
