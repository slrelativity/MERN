import React, { useState } from "react";
import axios from "axios";

const StockDetails = (stock) => {
	return (
		<div>
			<h2>{stock.quoteType?.longName}</h2>
			<p>Symbol: {stock.symbol}</p>
			<p>Price: ${stock.price?.regularMarketPrice?.raw}</p>
			<p>Market Cap: ${stock.price?.marketCap?.raw}</p>
			<p>52 Week High: ${stock.price?.fiftyTwoWeekHigh?.raw}</p>
			<p>52 Week Low: ${stock.price?.fiftyTwoWeekLow?.raw}</p>
		</div>
	);
};

export default StockDetails;
