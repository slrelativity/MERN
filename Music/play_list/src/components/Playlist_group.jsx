import React from "react";


function Playlist_group({ list, toggleList, deleteList }) {
	
	return (
		<ul>
				<button id="delete" onClick={deleteList}>
					Delete song from playList
				</button>
			<li style={{ textDecoration: list.completed ? "line-through" : "none" }}>
				{list.text} by: {list.text}
				<input
										type="checkbox"
					checked={list.completed}
					onChange={toggleList}
				/>
			</li>
		</ul>
	);
}

export default Playlist_group;