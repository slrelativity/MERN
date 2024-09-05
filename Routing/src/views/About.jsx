import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const About = (props) => {
	return (
		<div>
			<fieldset>
				<legend>About</legend>
				<h1 style={{ color: "blue" }}>About Component</h1>
				<Link to={`/`}>Go Home</Link>
			</fieldset>
		</div>
	);
};

export default About;
