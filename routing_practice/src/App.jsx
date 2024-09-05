import React from "react";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";


//function to render home page
const Home = () => (
	<div>
		<h1>Welcome</h1>
	</div>
);


//function to provide a greeting along with a variable 
const Hello = () => {
	const { text } = useParams();
	return (
		<div>
			<h1>The word is: {text}</h1>
		</div>
	);
};


//funtion to display message using a number and confirming info provided is a number
const NumberPage = () => {
	const { id } = useParams();
	return (
		<div>
			{isNaN(id) ? (
				<h1>This is not a number!</h1>
			) : (
				<h1>The number is: {id}</h1>
			)};
		</div>
	);
};


//funtion to capture paths/pages outside of provide to return NOT FOUND
const NotFound = () => {
	return (
		<div>
			<h1>404 - Page Not Found</h1>
		</div>
	);
};


//funtion to add color to text and background of the div
const Color = () => {
	const { color, textcolor, divcolor } = useParams();
    return (
		<div style={{ color: textcolor, backgroundColor:divcolor }}>The word is: {textcolor}
		</div>
	);
};


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="hello/:text" element={<Hello />} />
				<Route path="/:id" element={<NumberPage />} />
				<Route path="/hello/:textcolor/:divcolor" element={<Color />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
