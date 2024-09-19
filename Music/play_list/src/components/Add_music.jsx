import React, {useState} from 'react'

function Add_music({ addList }) {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		if (text) {	addList(text);	setText("");}
	};

	return (
		<form onSubmit={handleSubmit}>
			<ul>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="song, artist or tv show"
				/>
			</ul>
			<button type="submit">Add to Playlist</button>
		</form>
	);
}

export default Add_music;