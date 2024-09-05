import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = (props) => {
	return (
		<div>
			<fieldset>
				<legend>Home Component</legend>
				<h1 style={{ color: "red" }}>Home Component</h1>
				<Link to={"/about"}>Go to About </Link>
				<Link to={"/survey"}>Go to Survey </Link>
			</fieldset>
		</div>
	);
};

export default Home;