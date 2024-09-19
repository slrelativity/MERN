import React, { useState, useEffect } from "react";
import PunchLinePage from "./components/PunchLinePage.jsx";
import SetupPage from "./components/SetupPage.jsx";

function App() {
	const [joke, setJoke] = useState({});
	const [showPunchLine, setShowPunchLine] = useState(false);

	const getJoke = async () => {
		const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
		const data = await response.json();
		setJoke(data);
		setShowPunchLine(false);
	};

	useEffect(() => {
		getJoke();
	}, []);

	return (
		<div>
			<h1>Random Dad Jokes</h1>
			<SetupPage joke={joke} />
			{showPunchLine && <PunchLinePage joke={joke} />}
			<button onClick={getJoke}>Get Another Joke</button>
			<button onClick={() => setShowPunchLine(!showPunchLine)}>
				{showPunchLine ? "Hide PunchLine" : "Show PunchLine"}
			</button>
		</div>
	);
}

export default App;
