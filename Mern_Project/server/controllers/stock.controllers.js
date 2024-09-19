

export const getStocks = async (req, res) => {
	try {
		const stock = await Stock.find();
		res.status(201).json(stock);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};
