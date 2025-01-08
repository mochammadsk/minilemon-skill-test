import { Request, RequestHandler, Response } from 'express';
import User from '../models/user.model';

/* Create User */
const createUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Find user already exist by email
    const existUser = await User.findOne({ email: req.body.email });

    // Check user already exist by email
    if (existUser) {
      res
        .status(400)
        .json({ message: `Data with email ${req.body.email} already exist!` });
      return;
    }

    // Check required field
    if (
      !req.body.email ||
      !req.body.name ||
      !req.body.telp ||
      !req.body.department
    ) {
      res.status(400).json({ message: 'All fields are required!' });
      return;
    }

    // Check email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(req.body.email)) {
      res.status(400).json({ message: 'Invalid email!' });
      return;
    }

    // Check telp number is valid
    const telpRegex = /^\d{10,}$/;
    if (!telpRegex.test(req.body.telp)) {
      res.status(400).json({ message: 'Telp number must be 10 digit!' });
      return;
    }

    // Create user data
    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: 'Data created successfully', data: user });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

/* Get User */
const getUser: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const user = await User.find();

    // Check if user is empty
    if (user.length === 0) {
      res.status(404).json({ message: 'Data is empty!' });
      return;
    }

    res
      .status(200)
      .json({ message: 'Data retrieved successfully', data: user });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

/* Update User by Id */
const updateUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    // Find user by id
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });

    // Check user already exist
    if (!user) {
      res
        .status(404)
        .json({ message: `Data with ID ${req.params.id} not found!` });
      return;
    }

    res.status(200).json({ message: 'Data updated successfully', data: user });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

/* Delete User by Id */
const deleteUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    // Find user by id
    const user = await User.findOneAndDelete({ _id: req.params.id });

    // Check if user is empty
    if (!user) {
      res
        .status(404)
        .json({ message: `Data with ID ${req.params.id} not found!` });
      return;
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

export default { createUser, getUser, updateUser, deleteUser };
