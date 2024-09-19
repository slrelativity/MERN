import Gym from "../models/gym.models.js";


	export const getAllGyms = async (req, res) => {
    try {
        const gym =  await Gym.find();
        res.status(201).json(gym);
    } catch  (errors ){
        res.status(400).json({ message: errors.message });
    }
};

export const createOneGym = async (req, res) => {
    try {
        const gym = new Gym(req.body);
        await gym.save();
        res.status(201).json(gym);
    } catch  (errors ){
        res.status(400).json(errors);
    }
};

export const getOneGym = async (req, res) => {
	try {
		const gym = await Gym.findById(req.params.id);
		if (!gym) return res.status(400).json({ message: "Gym not found" });
		res.status(201).json(gym);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};

export const updateOneGym = async (req, res) => {
	try {
		const gym = await Gym.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		await gym.save();
		res.status(201).json(gym);
	} catch (errors) {
		res.status(400).json(errors);
	}
};

export const deleteOneGym = async (req, res) => {
	try {
		const gym = await Gym.findByIdAndDelete(req.params.id);
		res.status(201).json(gym);
	} catch (errors) {
		res.status(400).json(errors);
	}
};