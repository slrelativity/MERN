import React from "react";
import Playlist_group from "./Playlist_group";


function Song_and_artist({ lists, toggleList, deleteList }) {
	return (
		<form>

		<ul>
				{lists.map((list, index) => (
					<Playlist_group
						key={list.id || index}
						list={list}
						toggleList={() => toggleList(index)}
						deleteList={() => deleteList(index)}
					/>
				))}
			
		</ul>
		</form>
	);
};

export default Song_and_artist;
