import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const response = await User.find();
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return res.send({ error: "Email already in use" });
    }
    const user = new User({ email, password });

    await user.save();
    res.send({ message: "Signup success" });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const logInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "Data invalid" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send({ message: "Password invalid" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    req.session.token = token;
    res.send({ message: "Successfully Login", token });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    User.findByIdAndDelete({ _id: id }, (err, docs) => {
      if (err) {
        return console.log(err);
      }
      res.send({ message: "User Deleted" });
    });
  } catch (error) {
    res.status(400).send({ error });
  }
};
