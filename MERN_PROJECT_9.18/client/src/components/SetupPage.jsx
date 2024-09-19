import React from "react";

function SetupPage( joke ) {
	return (
		<div>
			<h2>{joke.setup || "Loading setup..."}</h2>
		</div>
	);
}

export default SetupPage;
