import BoatDetail from "../models/boatDetail.js";

export const getBoats = async (req, res) => {
    try {
      const boatDetails = await BoatDetail.find();
      res.status(200).json(boatDetails);
    } catch(error) {
        res.status(404).json({message: error.message});

    }
}

export const createBoats = (req, res) => {
    const boat = req.body;

    const newBoat = new BoatDetail(boat);
    try {
        await newBoat.save();
        res.status(201).json(newBoat);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}