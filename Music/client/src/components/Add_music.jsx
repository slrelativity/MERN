import React, {useState} from 'react'

function Add_music({ addList }) {
	// const [text, setText] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		// if (text) {	addList(text);	setText("");}
	};

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<ul>
				<input	type="text"	onChange={e=> setSearchTerm(e.target.value)} placeholder="Search for a song or artist"/>
				<button type="submit">Search</button>
			</ul>
		</form>
		</div>
			
	);
}

export default Add_music;