import React from "react";

function PunchLinePage( joke ) {
	return (
		<div>
			<h3>{joke.delivery || "Loading punchline..."}</h3>
		</div>
	);
}

export default PunchLinePage;
