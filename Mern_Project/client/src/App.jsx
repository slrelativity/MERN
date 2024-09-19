import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StockSearch from "./views/StockSearch.jsx";
import StockDetails from "./views/StockDetails.jsx";
import StockPage from "./views/StockPage.jsx";

function App() {
	

	return (
		<>
			<Routes>
				<Route path="/" element={<StockSearch />} />
				<Route path="/stock/:symbol" element={<StockDetails />} />
				<Route path="/stock/page" element={<StockPage />} />
			</Routes>
		</>
	);
};

export default App;
