import React from "react";
import CreatePage from "./views/CreatePage.jsx";
import DashboardPage from "./views/DashboardPage.jsx";
import DetailsPage from "./views/DetailsPage.jsx";
import UpdatePage from "./views/UpdatePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/gyms/add" element={<CreatePage />} />
				<Route path="/gyms/edit/:id" element={<UpdatePage />} />
				<Route path="/gyms/:id" element={<DetailsPage />} />
			</Routes>
		</>
	); 
}

export default App;
