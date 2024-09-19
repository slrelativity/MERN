import React from "react";
import Playlist_group from "./Playlist_group";


function Song_and_artist({ lists, toggleList, deleteList }) {
	return (
		<ul>
			<li className="form-control mx-2">
				{lists.map((list, index) => (
					<Playlist_group
						key={list.id || index}
						list={list}
						toggleList={() => toggleList(index)}
						deleteList={() => deleteList(index)}
					/>
				))}
			</li>
		</ul>
	);
};

export default Song_and_artist;
