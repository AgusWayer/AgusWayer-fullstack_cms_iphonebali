import { Label } from "../models/labelModel.js";

export const createLabel = async (req, res) => {
  const { label } = req.body;
  try {
    if (!label) {
      return res.send("Label is Empty!");
    }
    const create = new Label({
      label,
    });
    await create.save();
    res.send("Label Created!");
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getLabel = async (req, res) => {
  try {
    const response = await Label.find();
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getLabelById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Label.findById(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteLabelById = async (req, res) => {
  const { id } = req.params;
  try {
    await Label.findByIdAndDelete(id);
    res.send("Label Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const deleteLabels = async (req, res) => {
  try {
    await Label.deleteMany({});
    res.send("All Labels Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
