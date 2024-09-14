import React from "react";
import CreatePage from "./views/CreatePage.jsx";
import DetailsPage from "./views/DetailsPage.jsx"
import UpdatePage from "./views/UpdatePage.jsx";
import DashboardPage from "./views/DashboardPage.jsx";
import {BrowserRouter as Router, Routes, Route,	Link}  from "react-router-dom";

function App() {


	return (
		<>
			<Link to="/">go back home</Link>
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/stores/add" element={<CreatePage />} />
				<Route path="/stores/edit/:id" element={<UpdatePage />} />
				<Route path="/stores/:id" element={<DetailsPage />} />
			</Routes>
		</>
	);
}

export default App;
