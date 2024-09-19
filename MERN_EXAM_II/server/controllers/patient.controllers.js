import Patient from "../models/patient.models.js";

export const getAllPatients = async (req, res) => {
	try {
		const patient = await Patient.find();
		res.status(201).json(patient);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};

export const createOnePatient = async (req, res) => {
	try {
		const patient = new Patient(req.body);
		await patient.save();
		res.status(201).json(patient);
	} catch (errors) {
		res.status(400).json(errors);
	}
};

export const getOnePatient = async (req, res) => {
	try {
		const patient = await Patient.findById(req.params.id);
		if (!patient) return res.status(400).json({ message: "Patient not found" });
		res.status(201).json(patient);
	} catch (errors) {
		res.status(400).json({ message: errors.message });
	}
};

export const updateOnePatient = async (req, res) => {
	try {
		const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		await patient.save();
		res.status(201).json(patient);
	} catch (errors) {
		res.status(400).json(errors);
	}
};

export const deleteOnePatient = async (req, res) => {
	try {
		const patient = await Patient.findByIdAndDelete(req.params.id);
		res.status(201).json(patient);
	} catch (errors) {
		res.status(400).json(errors);
	}
};
