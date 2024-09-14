import Store from "../models/store.model.js";

export const addStore = async (req, res) => {
    try {
        const store = new Store(req.body);
        await store.save();
        res.status(201).json(store);
    } catch  (errors ){
        res.status(400).json(errors);
    }
};
export const getAllStores = async (req, res) => {
    try {
        const store =  await Store.find();
        res.status(201).json(store);
    } catch  (errors ){
        res.status(400).json({ message: errors.message });
    }
};

export const getOneStore= async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        if(!store) return res.status(400).json({message:"Store not found"});
        res.status(201).json(store);
    } catch  (errors ){
        res.status(400).json({ message: errors.message });
    }
};

export const updateStore = async (req, res) => {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        await store.save();
        res.status(201).json(store);
    } catch  (errors ){
        res.status(400).json(errors);
    }
};

export const deleteStore = async (req, res) => {
    try {
        const store = await Store.findByIdAndDelete(req.params.id);
        res.status(201).json(store);
    } catch  (errors ){
        res.status(400).json(errors);
    }
};