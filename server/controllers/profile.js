import About from "../models/about.js";

export const getProfile = async (req, res) => {
  try {
    const about = await About.find();

    res.status(200).json(about);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProfile = async (req, res) => {
  const profile = req.body;

  const newProfile = new About(profile);

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
