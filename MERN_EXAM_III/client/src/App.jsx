import React from "react";
import CreatePage from "./views/CreatePage.jsx";
import DashboardPage from "./views/DashboardPage.jsx";
import DetailsPage from "./views/DetailsPage.jsx";
import UpdatePage from "./views/UpdatePage.jsx";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Link to="/" className="mx-3">Home</Link>
			<Routes>
				<Route path="/" element={<CreatePage />} />
				<Route path="/patients" element={<DashboardPage />} />
				<Route path="/:id/edit" element={<UpdatePage />} />
				<Route path="/:id/details" element={<DetailsPage />} />
			</Routes>
		</>
	);
}

export default App;
