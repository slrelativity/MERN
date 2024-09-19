import { useState } from "react";
import Add_music from "./components/Add_music.jsx"
import Song_and_artist from "./components/Song_and_artist.jsx";
import "./App.css";

function App() {
	const [lists, setLists] = useState([]);

	//funtion to add a task
	const addList = (text) => {
		setLists([...lists, { text, completed: false }]);
	};

	//funtion to delete a task once created
	const deleteList = (index) => {
		setLists(lists.filter((_, i) => i !== index));
	};

	//funtion to toggle the checkbox
	const toggleList = (index) => {
		const newLists = lists.map((list, i) =>
			i === index ? { ...list, completed: !list.completed } : list
		);
		setLists(newLists);
	};

	return (
		<>
        <h1>Kid Tunes</h1>
			<fieldset>
				<Add_music addList={addList} />
				<Song_and_artist SongAndArtisit lists={lists} toggleList={toggleList}deleteList={deleteList} />
			</fieldset>
		</>
	);
}

export default App;
