import { useState, useEffect } from "react";
import Add_music from "./components/Add_music.jsx"
import Song_and_artist from "./components/Song_and_artist.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./views/DashboardPage.jsx";
import "./App.css";

function App() {
	const [lists, setLists] = useState([]);


	const [musicList, setMusicList] = useState([]);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8001/api/music/`)
			.then((response) => {
				setLists(response.data);
			})
			.catch((errors) => {
				setErrors("List of music did not load");
			});
	}, []);

	

	const addList = (searchTerm) => {
		setLists([...lists, { searchTerm, completed: false }]);
	};


	const deleteList = (index) => {
		setLists(lists.filter((_, i) => i !== index));
	};


	const toggleList = (index) => {
		const newLists = lists.map((list, i) =>
			i === index ? { ...list, completed: !list.completed } : list
		);
		setLists(newLists);
	};

	return (
		<>
			<div>
				<h1>Kid Tunes</h1>
				<fieldset>
					<Add_music addList={addList} />
					<Song_and_artist
						SongAndArtisit
						lists={lists}
						toggleList={toggleList}
						deleteList={deleteList}
					/>
				</fieldset>
			</div>
		</>
	);
}

export default App;
