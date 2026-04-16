import Music from "../models/music.models.js";

export const getAll = async (req, res) => {
	try {
		const music = await Music.find();
		res.status(201).json(music);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};

export const createOne = async (req, res) => {
	try {
		const music = new Music(req.body);
		await music.save();
		res.status(201).json(music);
	} catch (errors) {
		res.status(400).json(errors);
	}
};

export const getOne = async (req, res) => {
	try {
		const music = await Music.findById(req.params.id);
		if (!music) return res.status(400).json({ message: "Music not found" });
		res.status(201).json(music);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};

export const deleteOne = async (req, res) => {
	try {
		const music = await Music.findByIdAndDelete(req.params.id);
		res.status(201).json(music);
	} catch (errors) {
		res.status(400).json(errors);
	}
};
