import { Status } from "../models/statusModel.js";

export const createStatus = async (req, res) => {
  const { status } = req.body;
  try {
    if (!status) {
      return res.send("Status is Empty!");
    }
    const create = new Status({
      status,
    });
    await create.save();
    res.send("Status Created!");
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getStatus = async (req, res) => {
  try {
    const response = await Status.find();
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getStatusById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Status.findById(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteStatusById = async (req, res) => {
  const { id } = req.params;
  try {
    await Status.findByIdAndDelete(id);
    res.send("Status Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const deleteStatus = async (req, res) => {
  try {
    await Status.deleteMany({});
    res.send("All Statuss Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
