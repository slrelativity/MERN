import React from "react";

function Playlist_group({ list, toggleList, deleteList }) {
	return (
		<form>

		<ul>
			<button id="delete" onClick={deleteList}>
				Delete from playlist
			</button>
			<li style={{ textDecoration: list.completed ? "line-through" : "none" }}>
				{list.text} by: {list.text}
				<input type="checkbox" checked={list.completed} onChange={toggleList} />
			</li>
		</ul>
		</form>
	);
}

export default Playlist_group;
