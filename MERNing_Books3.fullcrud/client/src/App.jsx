import React from "react";
import CreatePage from "./views/CreatePage";
import DetailsPage from "./views/DetailsPage";
import UpdatePage from "./views/UpdatePage";
import DashboardPage from "./views/DashboardPage";
import {BrowserRouter as Router, Routes,Route,useParams, Link} from "react-router-dom";
import "./App.css";





function App(){
	return (
		<>
			{/* Link to Home and Add a new book */}
			<header id="customer">
				<Link to="/">Catalog | </Link>  
				<Link to="/books/new">Add a book</Link>
			</header>
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/books/new" element={<CreatePage />} />
				<Route path="/books/:id" element={<DetailsPage />} />
				<Route path="/books/:id/edit" element={<UpdatePage />} />
			</Routes>
		</>
	);
};

export default App;
