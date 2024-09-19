import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const StockSearch = () => {
	const [query, setQuery] = useState("");
	const [onStockSelect, setStockSelect] = useState("");
	const navigate = useNavigate();

useEffect(() =>{axios.get(`https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules`)
		.then ((response)  => setStockSelect(response.data))
		
		.catch((errors) => console.log(errors));
},[]);



	const handleSearch = () => {
		axios.get("'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules'",
				{
					params: { symbol: query },
					headers: {
						"X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
						"X-RapidAPI-Key":
							"88646330cfmsh05c7da9454f4313p131c4ajsn5aef9adff97d",
					},
				}
			);
			onStockSelect(response.data);{
			console.errors("Error collecting stock:", errors);
		};
	};

	return (
		<div>
			<input	type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default StockSearch;
